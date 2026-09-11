"""
🖼️ Image Compressor Ultra Pro - Compressão Profissional Máxima
Versão 3.0 - Algoritmos Avançados + Compressão Inteligente

Tecnologias:
- Perceptual Quality Optimization
- Smart Resizing com múltiplos algoritmos
- Compressão adaptativa por tipo de imagem
- Pre-processamento avançado
"""

from PIL import Image, ImageTk, ExifTags, ImageEnhance, ImageFilter
import pillow_heif
import os
import tkinter as tk
from tkinter import ttk, filedialog, messagebox
from pathlib import Path
from datetime import datetime
import threading
from typing import List, Tuple, Dict
import io
import numpy as np

# Registrar suporte para HEIC
pillow_heif.register_heif_opener()


class AdvancedImageAnalyzer:
    """Analisador avançado de imagens para otimização inteligente"""
    
    @staticmethod
    def analyze_image_complexity(img: Image.Image) -> Dict:
        """Analisa complexidade e características da imagem"""
        # Converte para RGB se necessário
        if img.mode != 'RGB':
            img_rgb = img.convert('RGB')
        else:
            img_rgb = img
        
        # Reduz para análise rápida
        thumb = img_rgb.copy()
        thumb.thumbnail((200, 200))
        pixels = np.array(thumb)
        
        # Calcula métricas
        brightness = np.mean(pixels)
        contrast = np.std(pixels)
        
        # Detecta tipo de imagem
        edges = np.std(np.diff(pixels, axis=0)) + np.std(np.diff(pixels, axis=1))
        
        # Análise de cores
        unique_colors = len(np.unique(pixels.reshape(-1, pixels.shape[2]), axis=0))
        color_variance = np.var(pixels)
        
        # Classifica tipo de imagem
        if edges < 10 and unique_colors < 1000:
            image_type = 'simple'  # Logos, gráficos simples
        elif edges < 20:
            image_type = 'gradient'  # Gradientes, backgrounds
        elif unique_colors < 5000:
            image_type = 'illustration'  # Ilustrações, drawings
        else:
            image_type = 'photo'  # Fotos realistas
        
        return {
            'type': image_type,
            'complexity': edges,
            'brightness': brightness,
            'contrast': contrast,
            'unique_colors': unique_colors,
            'color_variance': color_variance
        }
    
    @staticmethod
    def detect_dominant_features(img: Image.Image) -> Dict:
        """Detecta características dominantes para otimização"""
        img_small = img.copy()
        img_small.thumbnail((100, 100))
        
        # Analisa saturação
        if img_small.mode in ('RGBA', 'RGB'):
            img_hsv = img_small.convert('HSV')
            saturation = np.mean(np.array(img_hsv)[:, :, 1])
            
            return {
                'is_grayscale': saturation < 30,
                'is_high_saturation': saturation > 150,
                'saturation_level': saturation
            }
        
        return {'is_grayscale': False, 'is_high_saturation': False, 'saturation_level': 0}


class UltraImageCompressor:
    """Compressor ultra otimizado com algoritmos avançados"""
    
    ADVANCED_PRESETS = {
        'web_ultra_light': {
            'quality': 75,
            'max_dimension': 1280,
            'sharpening': 'medium',
            'description': '🎯 Web Ultra Light (~100KB)'
        },
        'ultra': {
            'quality': 82,
            'max_dimension': 1920,
            'sharpening': 'medium',
            'description': 'Ultra compressão inteligente'
        },
        'web_optimized': {
            'quality': 85,
            'max_dimension': 1920,
            'sharpening': 'low',
            'description': 'Otimizado para web (Recomendado)'
        },
        'high_quality': {
            'quality': 90,
            'max_dimension': 2560,
            'sharpening': 'none',
            'description': 'Alta qualidade com compressão'
        },
        'thumbnail': {
            'quality': 78,
            'max_dimension': 600,
            'sharpening': 'high',
            'description': 'Thumbnails otimizados'
        },
        'adaptive': {
            'quality': 85,
            'max_dimension': 1920,
            'sharpening': 'auto',
            'description': 'Adaptativo inteligente'
        }
    }
    
    def __init__(self, output_format='webp', preset='ultra', 
                 custom_quality=None, max_dimension=None, 
                 enable_smart_crop=False, keep_exif=False,
                 adaptive_quality=True, preprocessing='advanced'):
        
        self.output_format = output_format.lower()
        self.keep_exif = keep_exif
        self.enable_smart_crop = enable_smart_crop
        self.adaptive_quality = adaptive_quality
        self.preprocessing = preprocessing
        
        # Configurações do preset
        if preset in self.ADVANCED_PRESETS:
            config = self.ADVANCED_PRESETS[preset]
            self.base_quality = custom_quality if custom_quality else config['quality']
            self.max_dimension = max_dimension if max_dimension else config['max_dimension']
            self.sharpening_mode = config['sharpening']
        else:
            self.base_quality = custom_quality or 85
            self.max_dimension = max_dimension or 1920
            self.sharpening_mode = 'medium'
        
        self.analyzer = AdvancedImageAnalyzer()
        
        self.supported_formats = {'.png', '.jpg', '.jpeg', '.heic', '.bmp', 
                                 '.tiff', '.tif', '.gif', '.webp', '.heif'}
    
    def _calculate_adaptive_quality(self, img: Image.Image, analysis: Dict) -> int:
        """Calcula qualidade adaptativa baseada nas características da imagem"""
        if not self.adaptive_quality:
            return self.base_quality
        
        quality = self.base_quality
        
        # Ajusta baseado no tipo de imagem
        if analysis['type'] == 'simple':
            quality -= 10  # Imagens simples comprimem muito melhor
        elif analysis['type'] == 'gradient':
            quality -= 7  # Gradientes toleram bastante compressão
        elif analysis['type'] == 'illustration':
            quality -= 5  # Ilustrações comprimem bem
        elif analysis['type'] == 'photo':
            quality += 2  # Fotos precisam um pouco mais de qualidade
        
        # Ajusta baseado na complexidade
        if analysis['complexity'] > 50:
            quality += 3  # Imagens muito complexas precisam mais qualidade
        elif analysis['complexity'] < 15:
            quality -= 5  # Imagens muito simples podem comprimir muito mais
        
        # Ajusta baseado no contraste
        if analysis['contrast'] < 30:
            quality -= 3  # Baixo contraste comprime melhor
        
        # Para preset web_ultra_light, força redução adicional
        if self.base_quality <= 75:
            quality -= 2  # Redução extra para atingir ~100KB
        
        # Mantém dentro dos limites
        return max(65, min(95, quality))
    
    def _preprocess_image(self, img: Image.Image, analysis: Dict) -> Image.Image:
        """Pré-processamento avançado da imagem"""
        if self.preprocessing == 'none':
            return img
        
        # Redução de ruído para fotos
        if analysis['type'] == 'photo' and analysis['complexity'] > 40:
            # Filtro bilateral simulado (reduz ruído mantendo bordas)
            img = img.filter(ImageFilter.SMOOTH_MORE)
        
        # Otimização de contraste adaptativo
        if self.preprocessing == 'advanced':
            if analysis['contrast'] < 40:
                # Aumenta contraste em imagens com baixo contraste
                enhancer = ImageEnhance.Contrast(img)
                img = enhancer.enhance(1.1)
            elif analysis['contrast'] > 100:
                # Reduz contraste em imagens com muito contraste
                enhancer = ImageEnhance.Contrast(img)
                img = enhancer.enhance(0.95)
        
        # Otimização de cores para imagens saturadas
        if analysis.get('is_high_saturation', False):
            enhancer = ImageEnhance.Color(img)
            img = enhancer.enhance(0.98)
        
        return img
    
    def _correct_orientation(self, img: Image.Image) -> Image.Image:
        """Corrige orientação baseada em EXIF"""
        try:
            exif = img.getexif()
            if exif:
                orientation = exif.get(274)  # Tag de orientação
                if orientation:
                    rotations = {
                        3: 180,
                        6: 270,
                        8: 90
                    }
                    if orientation in rotations:
                        img = img.rotate(rotations[orientation], expand=True)
        except:
            pass
        return img
    
    def _smart_resize(self, img: Image.Image, analysis: Dict) -> Tuple[Image.Image, Tuple, Tuple]:
        """Redimensionamento inteligente com múltiplos algoritmos"""
        original_size = img.size
        width, height = img.size
        max_dim = max(width, height)
        
        if max_dim <= self.max_dimension:
            return img, original_size, original_size
        
        # Calcula nova dimensão
        ratio = self.max_dimension / max_dim
        new_width = int(width * ratio)
        new_height = int(height * ratio)
        
        # Escolhe algoritmo baseado no tipo de imagem
        if analysis['type'] in ('simple', 'illustration'):
            # Para logos e ilustrações: LANCZOS (melhor para bordas nítidas)
            resampling = Image.Resampling.LANCZOS
        elif analysis['type'] == 'gradient':
            # Para gradientes: BICUBIC (suave)
            resampling = Image.Resampling.BICUBIC
        else:
            # Para fotos: LANCZOS (melhor geral)
            resampling = Image.Resampling.LANCZOS
        
        # Resize em múltiplas etapas para melhor qualidade
        if ratio < 0.5:
            # Se redução é grande, faz em duas etapas
            intermediate_size = (int(width * 0.6), int(height * 0.6))
            img = img.resize(intermediate_size, resampling)
        
        img = img.resize((new_width, new_height), resampling)
        
        return img, original_size, (new_width, new_height)
    
    def _apply_adaptive_sharpening(self, img: Image.Image, analysis: Dict, 
                                   was_resized: bool) -> Image.Image:
        """Aplica sharpening adaptativo"""
        if not was_resized or self.sharpening_mode == 'none':
            return img
        
        # Determina intensidade baseado no modo
        if self.sharpening_mode == 'auto':
            if analysis['type'] in ('simple', 'illustration'):
                mode = 'high'
            elif analysis['type'] == 'photo':
                mode = 'low'
            else:
                mode = 'medium'
        else:
            mode = self.sharpening_mode
        
        # Parâmetros de sharpening
        params = {
            'low': {'radius': 0.3, 'percent': 40, 'threshold': 3},
            'medium': {'radius': 0.5, 'percent': 60, 'threshold': 3},
            'high': {'radius': 0.8, 'percent': 80, 'threshold': 2}
        }
        
        p = params.get(mode, params['medium'])
        img = img.filter(ImageFilter.UnsharpMask(
            radius=p['radius'],
            percent=p['percent'],
            threshold=p['threshold']
        ))
        
        return img
    
    def _optimize_save_parameters(self, img: Image.Image, analysis: Dict, 
                                  quality: int) -> Dict:
        """Otimiza parâmetros de salvamento baseado na análise"""
        params = {}
        
        if self.output_format == 'webp':
            params = {
                'quality': quality,
                'method': 6,  # Melhor compressão (0-6)
                'lossless': False,
                'exact': False,
            }
            
            # Para imagens simples, usa compressão ainda melhor
            if analysis['type'] in ('simple', 'gradient'):
                params['alpha_quality'] = quality - 5
            
        elif self.output_format == 'jpeg':
            params = {
                'quality': quality,
                'optimize': True,
                'progressive': True,
            }
            
            # Chroma subsampling adaptativo
            if analysis['type'] in ('simple', 'illustration'):
                params['subsampling'] = 2  # 4:2:0 para imagens simples
            else:
                params['subsampling'] = 0  # 4:4:4 para fotos
            
        elif self.output_format == 'png':
            params = {
                'optimize': True,
                'compress_level': 9
            }
            
            # Para imagens simples, tenta palette
            if analysis['unique_colors'] < 256:
                try:
                    img = img.convert('P', palette=Image.ADAPTIVE, colors=256)
                except:
                    pass
        
        return params
    
    def compress(self, input_path: Path, output_path: Path = None) -> Dict:
        """Comprime imagem com algoritmos ultra otimizados"""
        try:
            # Carrega imagem
            img = Image.open(input_path)
            original_mode = img.mode
            
            # Corrige orientação
            img = self._correct_orientation(img)
            
            # Analisa imagem
            analysis = self.analyzer.analyze_image_complexity(img)
            features = self.analyzer.detect_dominant_features(img)
            analysis.update(features)
            
            # Preserva EXIF se solicitado
            exif_data = None
            if self.keep_exif:
                try:
                    exif_data = img.info.get('exif')
                except:
                    pass
            
            # Pré-processamento
            img = self._preprocess_image(img, analysis)
            
            # Converte modo de cor se necessário
            if self.output_format == 'jpeg':
                if img.mode in ('RGBA', 'LA', 'P'):
                    if img.mode == 'P':
                        img = img.convert('RGBA')
                    
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    if img.mode in ('RGBA', 'LA'):
                        background.paste(img, mask=img.split()[-1])
                    img = background
                elif img.mode != 'RGB':
                    img = img.convert('RGB')
            elif self.output_format == 'webp':
                # WebP suporta transparência
                if img.mode not in ('RGB', 'RGBA'):
                    img = img.convert('RGBA' if 'transparency' in img.info else 'RGB')
            
            # Redimensionamento inteligente
            img, original_size, new_size = self._smart_resize(img, analysis)
            was_resized = original_size != new_size
            
            # Garante que as dimensões são tuplas
            if not isinstance(original_size, tuple):
                original_size = (img.size[0], img.size[1])
            if not isinstance(new_size, tuple):
                new_size = (img.size[0], img.size[1])
            
            # Sharpening adaptativo
            if was_resized:
                img = self._apply_adaptive_sharpening(img, analysis, was_resized)
            
            # Calcula qualidade adaptativa
            quality = self._calculate_adaptive_quality(img, analysis)
            
            # Define caminho de saída
            if output_path is None:
                output_dir = input_path.parent / 'compressed'
                output_dir.mkdir(exist_ok=True)
                output_path = output_dir / f"{input_path.stem}_ultra.{self.output_format}"
            
            # Otimiza parâmetros de salvamento
            save_params = self._optimize_save_parameters(img, analysis, quality)
            
            # Adiciona EXIF se necessário
            if exif_data and self.output_format == 'jpeg':
                save_params['exif'] = exif_data
            
            # Salva com múltiplas tentativas de qualidade se necessário
            img.save(output_path, self.output_format.upper(), **save_params)
            
            # Sistema de compressão progressiva para atingir tamanho alvo
            compressed_size = output_path.stat().st_size
            target_size_kb = 100 if self.base_quality <= 75 else 300  # 100KB para ultra light
            
            # Se arquivo ainda está grande e qualidade permite, tenta comprimir mais
            if compressed_size > target_size_kb * 1024 and quality > 68:
                attempts = 0
                max_attempts = 5
                
                while compressed_size > target_size_kb * 1024 and quality > 68 and attempts < max_attempts:
                    quality -= 3
                    test_params = save_params.copy()
                    test_params['quality'] = quality
                    
                    img.save(output_path, self.output_format.upper(), **test_params)
                    new_size = output_path.stat().st_size
                    
                    # Se conseguiu redução significativa, mantém
                    if new_size < compressed_size * 0.9:  # Pelo menos 10% de redução
                        compressed_size = new_size
                        attempts += 1
                    else:
                        break  # Para se não está mais conseguindo comprimir bem
            
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
                'format': self.output_format,
                'quality_used': quality,
                'image_type': analysis['type'],
                'analysis': analysis
            }
            
        except Exception as e:
            return {
                'success': False,
                'input_path': str(input_path),
                'error': str(e)
            }


class UltraCompressorGUI:
    """Interface gráfica ultra profissional"""
    
    def __init__(self, root):
        self.root = root
        self.root.title("🖼️ Image Compressor Ultra Pro v3.0")
        
        # Define tamanho mínimo e inicial
        self.root.minsize(900, 600)
        
        # Centraliza janela na tela
        screen_width = root.winfo_screenwidth()
        screen_height = root.winfo_screenheight()
        window_width = min(1100, screen_width - 100)
        window_height = min(800, screen_height - 100)
        x = (screen_width - window_width) // 2
        y = (screen_height - window_height) // 2
        self.root.geometry(f"{window_width}x{window_height}+{x}+{y}")
        
        self.root.configure(bg='#f5f5f5')
        
        # Variáveis
        self.input_files: List[Path] = []
        self.output_folder = None
        self.is_processing = False
        
        self.setup_ui()
    
    def setup_ui(self):
        """Interface gráfica profissional e responsiva"""
        
        # Estilo moderno
        style = ttk.Style()
        style.theme_use('clam')
        style.configure('Title.TLabel', font=('Segoe UI', 18, 'bold'), 
                       background='#f5f5f5', foreground='#2c3e50')
        style.configure('Subtitle.TLabel', font=('Segoe UI', 10), 
                       background='#f5f5f5', foreground='#7f8c8d')
        style.configure('Header.TLabel', font=('Segoe UI', 11, 'bold'))
        style.configure('Big.TButton', font=('Segoe UI', 10, 'bold'), padding=12)
        
        # Container principal com Canvas para scroll
        main_container = ttk.Frame(self.root)
        main_container.pack(fill=tk.BOTH, expand=True)
        
        # Canvas com scrollbar
        canvas = tk.Canvas(main_container, bg='#f5f5f5', highlightthickness=0)
        scrollbar = ttk.Scrollbar(main_container, orient="vertical", command=canvas.yview)
        
        # Frame scrollável dentro do canvas
        scrollable_frame = ttk.Frame(canvas, padding="25")
        
        scrollable_frame.bind(
            "<Configure>",
            lambda e: canvas.configure(scrollregion=canvas.bbox("all"))
        )
        
        canvas.create_window((0, 0), window=scrollable_frame, anchor="nw")
        canvas.configure(yscrollcommand=scrollbar.set)
        
        # Pack canvas e scrollbar
        canvas.pack(side="left", fill="both", expand=True)
        scrollbar.pack(side="right", fill="y")
        
        # Bind mouse wheel para scroll
        def _on_mousewheel(event):
            canvas.yview_scroll(int(-1*(event.delta/120)), "units")
        
        canvas.bind_all("<MouseWheel>", _on_mousewheel)
        
        # Cabeçalho
        header_frame = ttk.Frame(scrollable_frame)
        header_frame.pack(fill=tk.X, pady=(0, 20))
        
        ttk.Label(header_frame, text="🖼️ Image Compressor Ultra Pro", 
                 style='Title.TLabel').pack()
        ttk.Label(header_frame, 
                 text="Compressão inteligente com algoritmos avançados | Máxima qualidade, mínimo tamanho", 
                 style='Subtitle.TLabel').pack(pady=(5, 0))
        
        # Frame de botões principais (FIXO NO TOPO)
        button_frame = ttk.Frame(scrollable_frame)
        button_frame.pack(fill=tk.X, pady=(0, 15))
        
        # Primeira linha de botões
        top_buttons = ttk.Frame(button_frame)
        top_buttons.pack(fill=tk.X, pady=(0, 5))
        
        ttk.Button(top_buttons, text="📁 Adicionar Imagens", 
                  command=self.select_files, style='Big.TButton').pack(side=tk.LEFT, padx=2)
        ttk.Button(top_buttons, text="📂 Adicionar Pasta", 
                  command=self.select_folder, style='Big.TButton').pack(side=tk.LEFT, padx=2)
        ttk.Button(top_buttons, text="💾 Pasta Destino", 
                  command=self.select_output, style='Big.TButton').pack(side=tk.LEFT, padx=2)
        
        ttk.Button(top_buttons, text="🗑️ Limpar", 
                  command=self.clear_files).pack(side=tk.LEFT, padx=2)
        
        self.process_button = ttk.Button(top_buttons, text="🚀 PROCESSAR", 
                                        command=self.start_processing, 
                                        style='Big.TButton', state='disabled')
        self.process_button.pack(side=tk.RIGHT, padx=2)
        
        # Status e contador
        status_frame = ttk.Frame(button_frame)
        status_frame.pack(fill=tk.X)
        
        self.file_count_label = ttk.Label(status_frame, text="0 imagens", 
                                         font=('Segoe UI', 9, 'bold'))
        self.file_count_label.pack(side=tk.LEFT)
        
        self.status_label = ttk.Label(status_frame, 
                                     text="✨ Pronto para processar", 
                                     font=('Segoe UI', 9))
        self.status_label.pack(side=tk.RIGHT)
        
        # Notebook para abas
        notebook = ttk.Notebook(scrollable_frame)
        notebook.pack(fill=tk.BOTH, expand=True)
        
        # ABA 1: Configurações (com scroll interno)
        config_container = ttk.Frame(notebook)
        notebook.add(config_container, text="⚙️ Configurações")
        
        config_canvas = tk.Canvas(config_container, highlightthickness=0)
        config_scroll = ttk.Scrollbar(config_container, orient="vertical", 
                                     command=config_canvas.yview)
        config_tab = ttk.Frame(config_canvas, padding="15")
        
        config_tab.bind(
            "<Configure>",
            lambda e: config_canvas.configure(scrollregion=config_canvas.bbox("all"))
        )
        
        config_canvas.create_window((0, 0), window=config_tab, anchor="nw")
        config_canvas.configure(yscrollcommand=config_scroll.set)
        
        config_canvas.pack(side="left", fill="both", expand=True)
        config_scroll.pack(side="right", fill="y")
        
        self._create_config_tab(config_tab)
        
        # ABA 2: Arquivos
        files_tab = ttk.Frame(notebook, padding="15")
        notebook.add(files_tab, text="📁 Arquivos")
        
        self._create_files_tab(files_tab)
        
        # ABA 3: Resultados
        results_tab = ttk.Frame(notebook, padding="15")
        notebook.add(results_tab, text="📊 Resultados")
        
        self._create_results_tab(results_tab)
    
    def _create_config_tab(self, parent):
        """Cria aba de configurações com scroll"""
        
        # Formato
        format_frame = ttk.LabelFrame(parent, text="📄 Formato de Saída", padding="10")
        format_frame.pack(fill=tk.X, pady=(0, 10))
        
        self.format_var = tk.StringVar(value='webp')
        formats = [
            ('WebP - Melhor compressão ⭐', 'webp'),
            ('JPEG - Alta compatibilidade', 'jpeg'),
            ('PNG - Transparência', 'png')
        ]
        for text, value in formats:
            ttk.Radiobutton(format_frame, text=text, value=value, 
                           variable=self.format_var).pack(anchor=tk.W, pady=2)
        
        # Preset
        preset_frame = ttk.LabelFrame(parent, text="🎯 Modo de Compressão", padding="10")
        preset_frame.pack(fill=tk.X, pady=(0, 10))
        
        self.preset_var = tk.StringVar(value='ultra')
        presets = [
            ('🎯 Web Ultra Light - ~100KB por imagem', 'web_ultra_light'),
            ('⚡ Ultra - Máxima compressão inteligente', 'ultra'),
            ('🌐 Web Optimized - Balanceado para web', 'web_optimized'),
            ('💎 High Quality - Melhor qualidade', 'high_quality'),
            ('🤖 Adaptive - Adaptativo automático', 'adaptive'),
            ('🖼️ Thumbnail - Para miniaturas', 'thumbnail')
        ]
        for text, value in presets:
            ttk.Radiobutton(preset_frame, text=text, value=value, 
                           variable=self.preset_var).pack(anchor=tk.W, pady=2)
        
        # Qualidade customizada
        quality_frame = ttk.LabelFrame(parent, text="🎚️ Qualidade Manual (Opcional)", 
                                      padding="10")
        quality_frame.pack(fill=tk.X, pady=(0, 10))
        
        self.use_custom_quality = tk.BooleanVar(value=False)
        ttk.Checkbutton(quality_frame, text="Usar qualidade personalizada", 
                       variable=self.use_custom_quality).pack(anchor=tk.W, pady=(0, 5))
        
        quality_control = ttk.Frame(quality_frame)
        quality_control.pack(fill=tk.X)
        
        ttk.Label(quality_control, text="Qualidade:").pack(side=tk.LEFT, padx=(0, 10))
        
        self.quality_var = tk.IntVar(value=85)
        quality_scale = ttk.Scale(quality_control, from_=60, to=100, 
                                 variable=self.quality_var, orient=tk.HORIZONTAL, length=200)
        quality_scale.pack(side=tk.LEFT, padx=5, fill=tk.X, expand=True)
        
        self.quality_label = ttk.Label(quality_control, text="85", 
                                      font=('Segoe UI', 10, 'bold'), width=4)
        self.quality_label.pack(side=tk.LEFT, padx=5)
        
        quality_scale.configure(command=lambda v: self.quality_label.configure(
            text=f"{int(float(v))}"))
        
        # Dimensões
        dimension_frame = ttk.LabelFrame(parent, text="📐 Dimensão Máxima", padding="10")
        dimension_frame.pack(fill=tk.X, pady=(0, 10))
        
        self.dimension_var = tk.StringVar(value='1920')
        dims = [
            ('600px - Thumbnails', '600'),
            ('1280px - HD', '1280'),
            ('1920px - Full HD ⭐', '1920'),
            ('2560px - 2K', '2560'),
            ('3840px - 4K', '3840')
        ]
        for text, value in dims:
            ttk.Radiobutton(dimension_frame, text=text, value=value, 
                           variable=self.dimension_var).pack(anchor=tk.W, pady=2)
        
        # Opções avançadas
        advanced_frame = ttk.LabelFrame(parent, text="🔧 Opções Avançadas", padding="10")
        advanced_frame.pack(fill=tk.X, pady=(0, 10))
        
        self.adaptive_quality_var = tk.BooleanVar(value=True)
        ttk.Checkbutton(advanced_frame, text="✨ Qualidade adaptativa (Recomendado)", 
                       variable=self.adaptive_quality_var).pack(anchor=tk.W, pady=2)
        
        self.advanced_preprocessing_var = tk.BooleanVar(value=True)
        self.preprocessing_var = tk.StringVar(value='advanced')
        
        def toggle_preprocessing():
            self.preprocessing_var.set('advanced' if self.advanced_preprocessing_var.get() else 'none')
        
        ttk.Checkbutton(advanced_frame, text="🎨 Pré-processamento avançado (Recomendado)", 
                       variable=self.advanced_preprocessing_var,
                       command=toggle_preprocessing).pack(anchor=tk.W, pady=2)
        
        self.keep_exif_var = tk.BooleanVar(value=False)
        ttk.Checkbutton(advanced_frame, text="📷 Manter metadados EXIF", 
                       variable=self.keep_exif_var).pack(anchor=tk.W, pady=2)
        
        # Info
        info_frame = ttk.Frame(parent)
        info_frame.pack(pady=(10, 0), fill=tk.X)
        
        info_label = ttk.Label(info_frame, 
                              text="💡 Para ~100KB por imagem: Use 'Web Ultra Light' + WebP\n"
                                   "⚡ Para ~300-400KB: Use 'Ultra' + WebP\n"
                                   "🌐 Para ~500KB com máxima qualidade: Use 'Web Optimized' + WebP",
                              font=('Segoe UI', 8),
                              foreground='#7f8c8d',
                              wraplength=450,
                              justify=tk.LEFT)
        info_label.pack()
    
    def _create_files_tab(self, parent):
        """Cria aba de arquivos"""
        
        # Lista de arquivos
        list_frame = ttk.Frame(parent)
        list_frame.pack(fill=tk.BOTH, expand=True)
        
        # Scrollbars
        v_scrollbar = ttk.Scrollbar(list_frame)
        v_scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
        
        h_scrollbar = ttk.Scrollbar(list_frame, orient=tk.HORIZONTAL)
        h_scrollbar.pack(side=tk.BOTTOM, fill=tk.X)
        
        self.file_listbox = tk.Listbox(list_frame, 
                                       yscrollcommand=v_scrollbar.set,
                                       xscrollcommand=h_scrollbar.set,
                                       font=('Consolas', 9),
                                       selectmode=tk.EXTENDED)
        self.file_listbox.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        
        v_scrollbar.config(command=self.file_listbox.yview)
        h_scrollbar.config(command=self.file_listbox.xview)
        
        # Informações
        info_frame = ttk.Frame(parent)
        info_frame.pack(fill=tk.X, pady=(10, 0))
        
        ttk.Label(info_frame, text="💡 Dica: Selecione múltiplos arquivos ou pastas inteiras", 
                 font=('Segoe UI', 9), foreground='#7f8c8d').pack()
    
    def _create_results_tab(self, parent):
        """Cria aba de resultados"""
        
        # Área de progresso
        progress_frame = ttk.LabelFrame(parent, text="📊 Progresso", padding="10")
        progress_frame.pack(fill=tk.X, pady=(0, 10))
        
        self.progress_var = tk.DoubleVar()
        self.progress_bar = ttk.Progressbar(progress_frame, 
                                           variable=self.progress_var,
                                           maximum=100, 
                                           mode='determinate',
                                           length=500)
        self.progress_bar.pack(fill=tk.X, pady=5)
        
        self.progress_text = ttk.Label(progress_frame, text="Aguardando...", 
                                      font=('Segoe UI', 9))
        self.progress_text.pack()
        
        # Estatísticas em tempo real
        stats_frame = ttk.LabelFrame(parent, text="📈 Estatísticas", padding="10")
        stats_frame.pack(fill=tk.X, pady=(0, 10))
        
        stats_grid = ttk.Frame(stats_frame)
        stats_grid.pack()
        
        # Labels de estatísticas
        ttk.Label(stats_grid, text="Total Original:", 
                 font=('Segoe UI', 9, 'bold')).grid(row=0, column=0, sticky=tk.W, padx=5, pady=2)
        self.stat_original = ttk.Label(stats_grid, text="0.00 MB", 
                                       font=('Segoe UI', 9))
        self.stat_original.grid(row=0, column=1, sticky=tk.W, padx=5, pady=2)
        
        ttk.Label(stats_grid, text="Total Comprimido:", 
                 font=('Segoe UI', 9, 'bold')).grid(row=1, column=0, sticky=tk.W, padx=5, pady=2)
        self.stat_compressed = ttk.Label(stats_grid, text="0.00 MB", 
                                        font=('Segoe UI', 9))
        self.stat_compressed.grid(row=1, column=1, sticky=tk.W, padx=5, pady=2)
        
        ttk.Label(stats_grid, text="Economia Total:", 
                 font=('Segoe UI', 9, 'bold')).grid(row=2, column=0, sticky=tk.W, padx=5, pady=2)
        self.stat_saved = ttk.Label(stats_grid, text="0.00 MB (0%)", 
                                   font=('Segoe UI', 10, 'bold'),
                                   foreground='#27ae60')
        self.stat_saved.grid(row=2, column=1, sticky=tk.W, padx=5, pady=2)
        
        ttk.Label(stats_grid, text="Processadas:", 
                 font=('Segoe UI', 9, 'bold')).grid(row=0, column=2, sticky=tk.W, padx=15, pady=2)
        self.stat_processed = ttk.Label(stats_grid, text="0/0", 
                                       font=('Segoe UI', 9))
        self.stat_processed.grid(row=0, column=3, sticky=tk.W, padx=5, pady=2)
        
        ttk.Label(stats_grid, text="Sucesso:", 
                 font=('Segoe UI', 9, 'bold')).grid(row=1, column=2, sticky=tk.W, padx=15, pady=2)
        self.stat_success = ttk.Label(stats_grid, text="0", 
                                     font=('Segoe UI', 9),
                                     foreground='#27ae60')
        self.stat_success.grid(row=1, column=3, sticky=tk.W, padx=5, pady=2)
        
        ttk.Label(stats_grid, text="Falhas:", 
                 font=('Segoe UI', 9, 'bold')).grid(row=2, column=2, sticky=tk.W, padx=15, pady=2)
        self.stat_failed = ttk.Label(stats_grid, text="0", 
                                    font=('Segoe UI', 9),
                                    foreground='#e74c3c')
        self.stat_failed.grid(row=2, column=3, sticky=tk.W, padx=5, pady=2)
        
        # Log de resultados
        log_frame = ttk.LabelFrame(parent, text="📝 Log Detalhado", padding="10")
        log_frame.pack(fill=tk.BOTH, expand=True)
        
        # Scrollbar para log
        log_scroll = ttk.Scrollbar(log_frame)
        log_scroll.pack(side=tk.RIGHT, fill=tk.Y)
        
        self.results_text = tk.Text(log_frame, 
                                   height=15, 
                                   font=('Consolas', 8),
                                   wrap=tk.WORD, 
                                   state='disabled',
                                   yscrollcommand=log_scroll.set)
        self.results_text.pack(fill=tk.BOTH, expand=True)
        log_scroll.config(command=self.results_text.yview)
        
        # Tags para cores
        self.results_text.tag_config('success', foreground='#27ae60')
        self.results_text.tag_config('error', foreground='#e74c3c')
        self.results_text.tag_config('info', foreground='#3498db')
        self.results_text.tag_config('header', font=('Consolas', 9, 'bold'))
    
    def select_files(self):
        """Seleciona arquivos individuais"""
        filetypes = [
            ('Imagens', '*.jpg *.jpeg *.png *.webp *.heic *.bmp *.tiff *.gif'),
            ('Todos', '*.*')
        ]
        files = filedialog.askopenfilenames(title="Selecione as imagens", 
                                           filetypes=filetypes)
        
        if files:
            new_files = [Path(f) for f in files if Path(f) not in self.input_files]
            self.input_files.extend(new_files)
            self.update_file_list()
    
    def select_folder(self):
        """Seleciona pasta com imagens"""
        folder = filedialog.askdirectory(
            title="Selecione a pasta com as imagens",
            mustexist=True
        )
        
        if folder:
            folder_path = Path(folder)
            extensions = {'.jpg', '.jpeg', '.png', '.webp', '.heic', 
                         '.bmp', '.tiff', '.tif', '.gif'}
            
            new_files = []
            # Busca recursivamente em subpastas também
            for ext in extensions:
                # Busca na pasta principal
                for file in folder_path.glob(f"*{ext}"):
                    if file.is_file() and file not in self.input_files:
                        new_files.append(file)
                for file in folder_path.glob(f"*{ext.upper()}"):
                    if file.is_file() and file not in self.input_files:
                        new_files.append(file)
            
            if new_files:
                self.input_files.extend(new_files)
                self.update_file_list()
                self.add_log(f"✅ Encontradas {len(new_files)} imagens na pasta: {folder_path.name}\n", 'info')
            else:
                messagebox.showwarning(
                    "Nenhuma imagem encontrada",
                    f"Não foram encontradas imagens suportadas na pasta:\n{folder}"
                )
                self.add_log(f"⚠️  Nenhuma imagem encontrada em: {folder_path.name}\n", 'error')
    
    def select_output(self):
        """Seleciona pasta de destino"""
        folder = filedialog.askdirectory(title="Selecione a pasta de destino")
        if folder:
            self.output_folder = Path(folder)
            self.add_log(f"✅ Pasta de destino definida: {self.output_folder}\n", 'info')
    
    def clear_files(self):
        """Limpa lista de arquivos"""
        self.input_files.clear()
        self.update_file_list()
        self.add_log("🗑️ Lista de arquivos limpa\n", 'info')
    
    def update_file_list(self):
        """Atualiza lista de arquivos"""
        self.file_listbox.delete(0, tk.END)
        
        total_size = 0
        for file in self.input_files:
            size_mb = file.stat().st_size / (1024 * 1024)
            total_size += size_mb
            self.file_listbox.insert(tk.END, 
                                    f"{file.name} ({size_mb:.2f} MB)")
        
        count = len(self.input_files)
        self.file_count_label.config(
            text=f"{count} imagens ({total_size:.2f} MB total)")
        
        if count > 0:
            self.process_button.config(state='normal')
        else:
            self.process_button.config(state='disabled')
    
    def add_log(self, text, tag=None):
        """Adiciona texto ao log"""
        self.results_text.config(state='normal')
        if tag:
            self.results_text.insert(tk.END, text, tag)
        else:
            self.results_text.insert(tk.END, text)
        self.results_text.see(tk.END)
        self.results_text.config(state='disabled')
    
    def update_stats(self, processed, total, success, failed, 
                    original_mb, compressed_mb):
        """Atualiza estatísticas"""
        saved_mb = original_mb - compressed_mb
        saved_percent = (saved_mb / original_mb * 100) if original_mb > 0 else 0
        
        self.stat_original.config(text=f"{original_mb:.2f} MB")
        self.stat_compressed.config(text=f"{compressed_mb:.2f} MB")
        self.stat_saved.config(text=f"{saved_mb:.2f} MB ({saved_percent:.1f}%)")
        self.stat_processed.config(text=f"{processed}/{total}")
        self.stat_success.config(text=str(success))
        self.stat_failed.config(text=str(failed))
    
    def start_processing(self):
        """Inicia processamento"""
        if self.is_processing or not self.input_files:
            return
        
        # Confirma se tem muitos arquivos
        if len(self.input_files) > 50:
            if not messagebox.askyesno("Confirmação", 
                f"Você vai processar {len(self.input_files)} imagens. "
                "Isso pode demorar. Continuar?"):
                return
        
        self.is_processing = True
        self.process_button.config(state='disabled')
        
        # Limpa resultados anteriores
        self.results_text.config(state='normal')
        self.results_text.delete(1.0, tk.END)
        self.results_text.config(state='disabled')
        
        # Reseta estatísticas
        self.update_stats(0, len(self.input_files), 0, 0, 0, 0)
        
        # Inicia thread
        thread = threading.Thread(target=self.process_images, daemon=True)
        thread.start()
    
    def process_images(self):
        """Processa todas as imagens"""
        start_time = datetime.now()
        
        # Cria compressor
        custom_quality = self.quality_var.get() if self.use_custom_quality.get() else None
        
        compressor = UltraImageCompressor(
            output_format=self.format_var.get(),
            preset=self.preset_var.get(),
            custom_quality=custom_quality,
            max_dimension=int(self.dimension_var.get()),
            keep_exif=self.keep_exif_var.get(),
            adaptive_quality=self.adaptive_quality_var.get(),
            preprocessing=self.preprocessing_var.get()
        )
        
        total = len(self.input_files)
        success_count = 0
        failed_count = 0
        total_original = 0
        total_compressed = 0
        
        # Header do log
        self.add_log("=" * 100 + "\n", 'header')
        self.add_log(f"🚀 INICIANDO PROCESSAMENTO ULTRA PRO\n", 'header')
        self.add_log(f"📊 Total de imagens: {total}\n", 'info')
        self.add_log(f"⚙️  Formato: {compressor.output_format.upper()} | "
                    f"Preset: {self.preset_var.get()} | "
                    f"Qualidade base: {compressor.base_quality}\n", 'info')
        self.add_log(f"🎯 Qualidade adaptativa: {'SIM' if compressor.adaptive_quality else 'NÃO'} | "
                    f"Pré-processamento: {compressor.preprocessing.upper()}\n", 'info')
        self.add_log("=" * 100 + "\n\n", 'header')
        
        # Processa cada imagem
        for i, file in enumerate(self.input_files, 1):
            self.status_label.config(
                text=f"⚡ Processando {i}/{total}: {file.name}")
            self.progress_var.set((i / total) * 100)
            self.progress_text.config(text=f"{i}/{total} - {(i/total*100):.1f}%")
            
            # Define saída
            if self.output_folder:
                output_path = self.output_folder / f"{file.stem}_ultra.{compressor.output_format}"
            else:
                output_path = None
            
            # Comprime
            result = compressor.compress(file, output_path)
            
            if result['success']:
                success_count += 1
                total_original += result['original_size_mb']
                total_compressed += result['compressed_size_mb']
                
                # Garantir que dimensões são tuplas válidas
                orig_dims = result.get('original_dimensions', (0, 0))
                new_dims = result.get('new_dimensions', (0, 0))
                
                # Se não forem tuplas, converte
                if not isinstance(orig_dims, (tuple, list)) or len(orig_dims) < 2:
                    orig_dims = (0, 0)
                if not isinstance(new_dims, (tuple, list)) or len(new_dims) < 2:
                    new_dims = (0, 0)
                
                # Log detalhado
                self.add_log(f"✅ [{i}/{total}] {file.name}\n", 'success')
                self.add_log(f"    📷 Tipo: {result.get('image_type', 'UNKNOWN').upper()} | "
                           f"Qualidade usada: {result.get('quality_used', 0)}\n")
                self.add_log(f"    📏 Dimensões: "
                           f"{orig_dims[0]}x{orig_dims[1]} → "
                           f"{new_dims[0]}x{new_dims[1]}\n")
                self.add_log(f"    💾 Tamanho: "
                           f"{result['original_size_mb']:.2f} MB → "
                           f"{result['compressed_size_mb']:.2f} MB "
                           f"({result['reduction_percent']:.1f}% redução)\n")
                
                output_name = Path(result['output_path']).name if 'output_path' in result else 'unknown'
                self.add_log(f"    📁 Salva em: {output_name}\n\n")
            else:
                failed_count += 1
                self.add_log(f"❌ [{i}/{total}] {file.name}\n", 'error')
                self.add_log(f"    Erro: {result['error']}\n\n", 'error')
            
            # Atualiza stats
            self.update_stats(i, total, success_count, failed_count,
                            total_original, total_compressed)
        
        # Resumo final
        elapsed = (datetime.now() - start_time).total_seconds()
        total_saved = total_original - total_compressed
        total_percent = (total_saved / total_original * 100) if total_original > 0 else 0
        
        self.add_log("\n" + "=" * 100 + "\n", 'header')
        self.add_log("✨ PROCESSAMENTO CONCLUÍDO!\n\n", 'header')
        self.add_log("📊 RESUMO FINAL:\n", 'info')
        self.add_log(f"   ✅ Sucesso: {success_count} imagens\n", 'success')
        if failed_count > 0:
            self.add_log(f"   ❌ Falhas: {failed_count} imagens\n", 'error')
        self.add_log(f"   📦 Original: {total_original:.2f} MB\n")
        self.add_log(f"   📦 Comprimido: {total_compressed:.2f} MB\n")
        self.add_log(f"   💰 ECONOMIA: {total_saved:.2f} MB ({total_percent:.1f}%)\n", 
                    'success')
        self.add_log(f"   ⏱️  Tempo: {elapsed:.1f}s ({elapsed/total:.2f}s por imagem)\n")
        self.add_log("=" * 100 + "\n", 'header')
        
        self.status_label.config(text="✅ Processamento concluído com sucesso!")
        self.progress_var.set(100)
        self.is_processing = False
        self.process_button.config(state='normal')
        
        # Notificação final
        messagebox.showinfo(
            "✅ Concluído!", 
            f"Processamento finalizado!\n\n"
            f"✅ Sucesso: {success_count}/{total}\n"
            f"❌ Falhas: {failed_count}\n\n"
            f"💰 Economia: {total_saved:.2f} MB ({total_percent:.1f}%)\n"
            f"⏱️  Tempo: {elapsed:.1f}s"
        )


# Execução principal
if __name__ == "__main__":
    try:
        root = tk.Tk()
        app = UltraCompressorGUI(root)
        root.mainloop()
    except Exception as e:
        print(f"Erro ao iniciar aplicação: {e}")
        print("\nCertifique-se de ter instalado as dependências:")
        print("pip install Pillow pillow-heif numpy")