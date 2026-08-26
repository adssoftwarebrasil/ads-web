"""
🖼️ Image Compressor Pro - Compressor Profissional de Imagens para Web
Versão 2.0 - Interface Gráfica + Compressão Avançada

Suporta: PNG, JPEG, JPG, HEIC, BMP, TIFF, GIF, WEBP, SVG
Múltiplos modos de compressão com preview visual
"""

from PIL import Image, ImageTk, ExifTags
import pillow_heif
import os
import tkinter as tk
from tkinter import ttk, filedialog, messagebox
from pathlib import Path
from datetime import datetime
import threading
from typing import List, Tuple
import io

# Registrar suporte para HEIC
pillow_heif.register_heif_opener()


class ImageCompressorEngine:
    """Motor de compressão de imagens com algoritmos avançados"""
    
    PRESETS = {
        'maximum': {'quality': 75, 'max_dimension': 1920, 'description': 'Máxima compressão'},
        'balanced': {'quality': 85, 'max_dimension': 1920, 'description': 'Balanceado (Recomendado)'},
        'quality': {'quality': 92, 'max_dimension': 2560, 'description': 'Alta qualidade'},
        'thumbnail': {'quality': 80, 'max_dimension': 600, 'description': 'Thumbnails'},
    }
    
    def __init__(self, output_format='webp', preset='balanced', custom_quality=None, 
                 max_dimension=None, keep_exif=False):
        self.output_format = output_format.lower()
        self.keep_exif = keep_exif
        
        # Aplica preset ou configurações customizadas
        if preset in self.PRESETS:
            config = self.PRESETS[preset]
            self.quality = custom_quality if custom_quality else config['quality']
            self.max_dimension = max_dimension if max_dimension else config['max_dimension']
        else:
            self.quality = custom_quality or 85
            self.max_dimension = max_dimension or 1920
        
        self.supported_formats = {'.png', '.jpg', '.jpeg', '.heic', '.bmp', 
                                 '.tiff', '.tif', '.gif', '.webp', '.heif'}
    
    def _correct_orientation(self, img):
        """Corrige orientação da imagem baseado em EXIF"""
        try:
            exif = img._getexif()
            if exif:
                for tag, value in exif.items():
                    if tag in ExifTags.TAGS and ExifTags.TAGS[tag] == 'Orientation':
                        if value == 3:
                            img = img.rotate(180, expand=True)
                        elif value == 6:
                            img = img.rotate(270, expand=True)
                        elif value == 8:
                            img = img.rotate(90, expand=True)
        except:
            pass
        return img
    
    def _optimize_resize(self, img):
        """Redimensiona com algoritmo otimizado"""
        width, height = img.size
        max_dim = max(width, height)
        
        if max_dim > self.max_dimension:
            ratio = self.max_dimension / max_dim
            new_width = int(width * ratio)
            new_height = int(height * ratio)
            
            # Usa LANCZOS para melhor qualidade
            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            return img, (width, height), (new_width, new_height)
        
        return img, (width, height), (width, height)
    
    def _apply_sharpening(self, img):
        """Aplica sharpening sutil após redimensionamento"""
        from PIL import ImageFilter
        return img.filter(ImageFilter.UnsharpMask(radius=0.5, percent=50, threshold=3))
    
    def compress(self, input_path: Path, output_path: Path = None) -> dict:
        """Comprime uma imagem e retorna estatísticas"""
        try:
            # Abre imagem
            img = Image.open(input_path)
            
            # Corrige orientação
            img = self._correct_orientation(img)
            
            # Preserva EXIF se solicitado
            exif_data = img.info.get('exif', None) if self.keep_exif else None
            
            # Converte modo de cor se necessário
            original_mode = img.mode
            if self.output_format == 'jpeg':
                if img.mode in ('RGBA', 'LA', 'P'):
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    if img.mode == 'P':
                        img = img.convert('RGBA')
                    if 'transparency' in img.info or img.mode in ('RGBA', 'LA'):
                        alpha = img.split()[-1] if img.mode in ('RGBA', 'LA') else None
                        background.paste(img, mask=alpha)
                    img = background
                elif img.mode != 'RGB':
                    img = img.convert('RGB')
            
            # Redimensiona
            img, original_size, new_size = self._optimize_resize(img)
            
            # Aplica sharpening se redimensionado
            if original_size != new_size:
                img = self._apply_sharpening(img)
            
            # Define caminho de saída
            if output_path is None:
                output_dir = input_path.parent / 'compressed'
                output_dir.mkdir(exist_ok=True)
                output_path = output_dir / f"{input_path.stem}_compressed.{self.output_format}"
            
            # Configurações de salvamento otimizadas
            save_kwargs = {}
            
            if self.output_format == 'webp':
                save_kwargs = {
                    'quality': self.quality,
                    'method': 6,  # Melhor compressão (0-6)
                    'lossless': False,
                    'exact': False
                }
            elif self.output_format == 'jpeg':
                save_kwargs = {
                    'quality': self.quality,
                    'optimize': True,
                    'progressive': True,
                    'subsampling': 0  # 4:4:4 chroma
                }
                if exif_data:
                    save_kwargs['exif'] = exif_data
            elif self.output_format == 'png':
                save_kwargs = {
                    'optimize': True,
                    'compress_level': 9
                }
            
            # Salva imagem
            img.save(output_path, self.output_format.upper(), **save_kwargs)
            
            # Calcula estatísticas
            original_bytes = input_path.stat().st_size
            compressed_bytes = output_path.stat().st_size
            reduction = ((original_bytes - compressed_bytes) / original_bytes) * 100
            
            return {
                'success': True,
                'input_path': str(input_path),
                'output_path': str(output_path),
                'original_size_mb': original_bytes / (1024 * 1024),
                'compressed_size_mb': compressed_bytes / (1024 * 1024),
                'reduction_percent': reduction,
                'original_dimensions': original_size,
                'new_dimensions': new_size,
                'format': self.output_format
            }
            
        except Exception as e:
            return {
                'success': False,
                'input_path': str(input_path),
                'error': str(e)
            }


class ImageCompressorGUI:
    """Interface gráfica profissional para compressão de imagens"""
    
    def __init__(self, root):
        self.root = root
        self.root.title("🖼️ Image Compressor Pro v2.0")
        self.root.geometry("1000x700")
        self.root.configure(bg='#f0f0f0')
        
        # Variáveis
        self.input_files: List[Path] = []
        self.output_folder = None
        self.is_processing = False
        
        self.setup_ui()
    
    def setup_ui(self):
        """Configura interface gráfica"""
        
        # Estilo
        style = ttk.Style()
        style.theme_use('clam')
        style.configure('Title.TLabel', font=('Segoe UI', 16, 'bold'), background='#f0f0f0')
        style.configure('Subtitle.TLabel', font=('Segoe UI', 10), background='#f0f0f0')
        style.configure('Big.TButton', font=('Segoe UI', 10, 'bold'), padding=10)
        
        # Frame principal
        main_frame = ttk.Frame(self.root, padding="20")
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # Título
        title_frame = ttk.Frame(main_frame)
        title_frame.pack(fill=tk.X, pady=(0, 20))
        
        ttk.Label(title_frame, text="🖼️ Image Compressor Pro", 
                 style='Title.TLabel').pack()
        ttk.Label(title_frame, text="Compressão profissional de imagens para web", 
                 style='Subtitle.TLabel').pack()
        
        # Frame de controles
        control_frame = ttk.LabelFrame(main_frame, text="⚙️ Configurações", padding="15")
        control_frame.pack(fill=tk.X, pady=(0, 10))
        
        # Formato de saída
        format_frame = ttk.Frame(control_frame)
        format_frame.pack(fill=tk.X, pady=5)
        ttk.Label(format_frame, text="Formato:").pack(side=tk.LEFT, padx=(0, 10))
        
        self.format_var = tk.StringVar(value='webp')
        for fmt in [('WebP (Recomendado)', 'webp'), ('JPEG', 'jpeg'), ('PNG', 'png')]:
            ttk.Radiobutton(format_frame, text=fmt[0], value=fmt[1], 
                           variable=self.format_var).pack(side=tk.LEFT, padx=5)
        
        # Preset de qualidade
        preset_frame = ttk.Frame(control_frame)
        preset_frame.pack(fill=tk.X, pady=5)
        ttk.Label(preset_frame, text="Preset:").pack(side=tk.LEFT, padx=(0, 10))
        
        self.preset_var = tk.StringVar(value='balanced')
        presets = [
            ('Máxima Compressão', 'maximum'),
            ('Balanceado ⭐', 'balanced'),
            ('Alta Qualidade', 'quality'),
            ('Thumbnails', 'thumbnail')
        ]
        for name, value in presets:
            ttk.Radiobutton(preset_frame, text=name, value=value, 
                           variable=self.preset_var).pack(side=tk.LEFT, padx=5)
        
        # Qualidade customizada
        quality_frame = ttk.Frame(control_frame)
        quality_frame.pack(fill=tk.X, pady=5)
        ttk.Label(quality_frame, text="Qualidade (1-100):").pack(side=tk.LEFT, padx=(0, 10))
        
        self.quality_var = tk.IntVar(value=85)
        quality_scale = ttk.Scale(quality_frame, from_=1, to=100, 
                                 variable=self.quality_var, orient=tk.HORIZONTAL, length=300)
        quality_scale.pack(side=tk.LEFT, padx=5)
        self.quality_label = ttk.Label(quality_frame, text="85")
        self.quality_label.pack(side=tk.LEFT, padx=5)
        
        quality_scale.configure(command=lambda v: self.quality_label.configure(text=f"{int(float(v))}"))
        
        # Dimensão máxima
        dimension_frame = ttk.Frame(control_frame)
        dimension_frame.pack(fill=tk.X, pady=5)
        ttk.Label(dimension_frame, text="Dimensão máxima:").pack(side=tk.LEFT, padx=(0, 10))
        
        self.dimension_var = tk.StringVar(value='1920')
        for dim in ['800', '1280', '1920', '2560', '3840']:
            ttk.Radiobutton(dimension_frame, text=f"{dim}px", value=dim, 
                           variable=self.dimension_var).pack(side=tk.LEFT, padx=5)
        
        # Opções adicionais
        options_frame = ttk.Frame(control_frame)
        options_frame.pack(fill=tk.X, pady=5)
        
        self.keep_exif_var = tk.BooleanVar(value=False)
        ttk.Checkbutton(options_frame, text="Manter dados EXIF", 
                       variable=self.keep_exif_var).pack(side=tk.LEFT, padx=5)
        
        # Botões de ação
        button_frame = ttk.Frame(main_frame)
        button_frame.pack(fill=tk.X, pady=10)
        
        ttk.Button(button_frame, text="📁 Selecionar Imagens", 
                  command=self.select_files, style='Big.TButton').pack(side=tk.LEFT, padx=5)
        ttk.Button(button_frame, text="📂 Selecionar Pasta", 
                  command=self.select_folder, style='Big.TButton').pack(side=tk.LEFT, padx=5)
        ttk.Button(button_frame, text="💾 Pasta de Destino", 
                  command=self.select_output, style='Big.TButton').pack(side=tk.LEFT, padx=5)
        
        self.process_button = ttk.Button(button_frame, text="🚀 Processar Imagens", 
                                        command=self.start_processing, 
                                        style='Big.TButton', state='disabled')
        self.process_button.pack(side=tk.RIGHT, padx=5)
        
        # Lista de arquivos
        list_frame = ttk.LabelFrame(main_frame, text="📋 Imagens Selecionadas", padding="10")
        list_frame.pack(fill=tk.BOTH, expand=True, pady=10)
        
        # Scrollbar
        scrollbar = ttk.Scrollbar(list_frame)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
        
        self.file_listbox = tk.Listbox(list_frame, yscrollcommand=scrollbar.set, 
                                       font=('Segoe UI', 9), height=10)
        self.file_listbox.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.config(command=self.file_listbox.yview)
        
        # Área de progresso
        progress_frame = ttk.LabelFrame(main_frame, text="📊 Progresso", padding="10")
        progress_frame.pack(fill=tk.X, pady=10)
        
        self.progress_var = tk.DoubleVar()
        self.progress_bar = ttk.Progressbar(progress_frame, variable=self.progress_var, 
                                           maximum=100, length=400)
        self.progress_bar.pack(fill=tk.X, pady=5)
        
        self.status_label = ttk.Label(progress_frame, text="Pronto para processar", 
                                     font=('Segoe UI', 9))
        self.status_label.pack()
        
        # Área de resultados
        results_frame = ttk.LabelFrame(main_frame, text="📈 Resultados", padding="10")
        results_frame.pack(fill=tk.BOTH, expand=True)
        
        self.results_text = tk.Text(results_frame, height=8, font=('Consolas', 9), 
                                   wrap=tk.WORD, state='disabled')
        self.results_text.pack(fill=tk.BOTH, expand=True)
        
        results_scroll = ttk.Scrollbar(results_frame, command=self.results_text.yview)
        results_scroll.pack(side=tk.RIGHT, fill=tk.Y)
        self.results_text.config(yscrollcommand=results_scroll.set)
    
    def select_files(self):
        """Seleciona arquivos individuais"""
        filetypes = [
            ('Imagens', '*.jpg *.jpeg *.png *.webp *.heic *.bmp *.tiff *.gif'),
            ('Todos', '*.*')
        ]
        files = filedialog.askopenfilenames(title="Selecione as imagens", filetypes=filetypes)
        
        if files:
            self.input_files = [Path(f) for f in files]
            self.update_file_list()
    
    def select_folder(self):
        """Seleciona pasta com imagens"""
        folder = filedialog.askdirectory(title="Selecione a pasta com imagens")
        
        if folder:
            folder_path = Path(folder)
            extensions = {'.jpg', '.jpeg', '.png', '.webp', '.heic', '.bmp', '.tiff', '.gif'}
            
            self.input_files = []
            for ext in extensions:
                self.input_files.extend(folder_path.glob(f"*{ext}"))
                self.input_files.extend(folder_path.glob(f"*{ext.upper()}"))
            
            self.update_file_list()
    
    def select_output(self):
        """Seleciona pasta de destino"""
        folder = filedialog.askdirectory(title="Selecione a pasta de destino")
        if folder:
            self.output_folder = Path(folder)
            self.add_result(f"✅ Pasta de destino: {self.output_folder}\n")
    
    def update_file_list(self):
        """Atualiza lista de arquivos"""
        self.file_listbox.delete(0, tk.END)
        
        for file in self.input_files:
            size_mb = file.stat().st_size / (1024 * 1024)
            self.file_listbox.insert(tk.END, f"{file.name} ({size_mb:.2f} MB)")
        
        if self.input_files:
            self.process_button.config(state='normal')
            self.add_result(f"✅ {len(self.input_files)} imagens selecionadas\n")
    
    def add_result(self, text):
        """Adiciona texto na área de resultados"""
        self.results_text.config(state='normal')
        self.results_text.insert(tk.END, text)
        self.results_text.see(tk.END)
        self.results_text.config(state='disabled')
    
    def start_processing(self):
        """Inicia processamento em thread separada"""
        if self.is_processing:
            return
        
        if not self.input_files:
            messagebox.showwarning("Aviso", "Selecione imagens para processar!")
            return
        
        self.is_processing = True
        self.process_button.config(state='disabled')
        self.results_text.config(state='normal')
        self.results_text.delete(1.0, tk.END)
        self.results_text.config(state='disabled')
        
        # Inicia thread de processamento
        thread = threading.Thread(target=self.process_images, daemon=True)
        thread.start()
    
    def process_images(self):
        """Processa todas as imagens"""
        start_time = datetime.now()
        
        # Cria engine de compressão
        engine = ImageCompressorEngine(
            output_format=self.format_var.get(),
            preset=self.preset_var.get(),
            custom_quality=self.quality_var.get(),
            max_dimension=int(self.dimension_var.get()),
            keep_exif=self.keep_exif_var.get()
        )
        
        total = len(self.input_files)
        success_count = 0
        total_original = 0
        total_compressed = 0
        
        self.add_result(f"🚀 Iniciando processamento de {total} imagens...\n")
        self.add_result(f"⚙️  Formato: {engine.output_format.upper()} | Qualidade: {engine.quality}\n")
        self.add_result("=" * 80 + "\n\n")
        
        for i, file in enumerate(self.input_files, 1):
            self.status_label.config(text=f"Processando {i}/{total}: {file.name}")
            self.progress_var.set((i / total) * 100)
            
            # Define caminho de saída
            if self.output_folder:
                output_path = self.output_folder / f"{file.stem}_compressed.{engine.output_format}"
            else:
                output_path = None
            
            # Comprime
            result = engine.compress(file, output_path)
            
            if result['success']:
                success_count += 1
                total_original += result['original_size_mb']
                total_compressed += result['compressed_size_mb']
                
                self.add_result(f"✅ {file.name}\n")
                self.add_result(f"   Original: {result['original_size_mb']:.2f} MB "
                              f"({result['original_dimensions'][0]}x{result['original_dimensions'][1]})\n")
                self.add_result(f"   Comprimida: {result['compressed_size_mb']:.2f} MB "
                              f"({result['new_dimensions'][0]}x{result['new_dimensions'][1]})\n")
                self.add_result(f"   Redução: {result['reduction_percent']:.1f}%\n\n")
            else:
                self.add_result(f"❌ {file.name}\n")
                self.add_result(f"   Erro: {result['error']}\n\n")
        
        # Resumo final
        elapsed = (datetime.now() - start_time).total_seconds()
        total_reduction = ((total_original - total_compressed) / total_original * 100) if total_original > 0 else 0
        
        self.add_result("=" * 80 + "\n")
        self.add_result(f"✨ PROCESSAMENTO CONCLUÍDO!\n\n")
        self.add_result(f"📊 Estatísticas:\n")
        self.add_result(f"   • Imagens processadas: {success_count}/{total}\n")
        self.add_result(f"   • Tamanho original total: {total_original:.2f} MB\n")
        self.add_result(f"   • Tamanho comprimido total: {total_compressed:.2f} MB\n")
        self.add_result(f"   • Economia total: {total_original - total_compressed:.2f} MB ({total_reduction:.1f}%)\n")
        self.add_result(f"   • Tempo total: {elapsed:.1f}s\n")
        
        self.status_label.config(text="✅ Processamento concluído!")
        self.progress_var.set(100)
        self.is_processing = False
        self.process_button.config(state='normal')
        
        messagebox.showinfo("Sucesso!", 
                          f"✅ {success_count}/{total} imagens processadas com sucesso!\n\n"
                          f"Economia total: {total_original - total_compressed:.2f} MB ({total_reduction:.1f}%)")


# Execução
if __name__ == "__main__":
    root = tk.Tk()
    app = ImageCompressorGUI(root)
    root.mainloop()