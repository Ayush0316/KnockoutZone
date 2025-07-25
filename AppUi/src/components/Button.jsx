const Button = ({ 
    children, 
    onClick, 
    variant = 'primary', 
    size = 'medium', 
    className = '', 
    disabled = false,
    ...props 
}) => {
    const baseStyles = 'font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';
    
    const variants = {
        primary: 'text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700',
        secondary: 'text-gray-700 bg-white/20 backdrop-blur-lg border border-white/30 hover:bg-white/30',
        outline: 'text-gray-700 border border-gray-300 hover:bg-white/20',
    };
    
    const sizes = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg',
    };
    
    const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
    
    return (
        <button
            className={buttonStyles}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
