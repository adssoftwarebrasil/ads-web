import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-gold text-brand-brown hover:bg-brand-red hover:text-white focus-visible:ring-brand-gold',
  secondary:
    'bg-brand-brown text-white hover:bg-brand-brown-dark focus-visible:ring-brand-brown',
  outline:
    'bg-transparent text-brand-brown border-2 border-brand-brown hover:bg-brand-brown hover:text-white focus-visible:ring-brand-brown',
  ghost:
    'bg-transparent text-brand-brown hover:bg-brand-beige-dark focus-visible:ring-brand-brown',
};

const base =
  'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  className?: string;
  children?: ReactNode;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
};

export default function Button(props: ButtonProps) {
  const { variant = 'primary', className = '', children, ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const { href, target, rel } = props;
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
