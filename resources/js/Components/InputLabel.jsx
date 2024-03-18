export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className="form-label">
            {value ? value : children}
        </label>
    );
}
