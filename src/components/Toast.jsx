import '../styles/components/Toast.css'

const Toast = ({ toasts }) => {
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast ${toast.type}`}>
          <span className="icon">
            {toast.type === "success" && "✔"}
            {toast.type === "error" && "✖"}
            {toast.type === "warning" && "⚠"}
          </span>
          <p>{toast.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Toast;