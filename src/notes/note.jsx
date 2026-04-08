import React, { useState, useMemo } from "react";
import "./ProductModal.css";

const ProductModal = ({ product, sectionName, optionsData, onClose, addToCart }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  // 🔥 Filter options sesuai kategori product
  const availableOptions = useMemo(() => {
    return optionsData.filter(opt =>
      opt.applicable_to.includes(sectionName)
    );
  }, [sectionName, optionsData]);

  // 🧠 Handle select option
  const handleSelectOption = (option, item, e) => {
    setSelectedOptions(prev => {
      const key = option.optional_name;

      if (option.type === "multiple") {
        const current = prev[key] || [];

        if (e.target.checked) {
          return {
            ...prev,
            [key]: [...current, item]
          };
        } else {
          return {
            ...prev,
            [key]: current.filter(i => i.id !== item.id)
          };
        }
      } else {
        return {
          ...prev,
          [key]: item
        };
      }
    });
  };


  // 💰 Hitung total harga
  const totalPrice = useMemo(() => {
    let total = product.price;

    Object.values(selectedOptions).forEach(opt => {
      if (Array.isArray(opt)) {
        opt.forEach(item => total += item.price);
      } else {
        total += opt.price;
      }
    });

    return total;
  }, [selectedOptions, product.price]);

  // 🛒 Add to cart
  const handleAddToCart = () => {
    const newItem = {
      ...product,
      quantity: 1,
      selectedOptions,
      totalPrice
    };

    addToCart(newItem);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">

        {/* HEADER */}
        <div className="modal-header">
          <h2>{product.name}</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* PRODUCT INFO */}
        <div className="modal-product">
          <img src={product.img} alt={product.name} />
          <p>{product.description}</p>
          <h3>Rp {product.price}</h3>
        </div>

        {/* OPTIONS */}
        <div className="modal-options">
          {availableOptions.map((opt) => (
            <div key={opt.id} className="option-group">
              <h4>{opt.optional_name}</h4>

              <div className="option-items">
                {opt.optional_menu.map((item) => {
                  const isChecked =
                    opt.type === "multiple"
                      ? selectedOptions[opt.optional_name]?.some(i => i.id === item.id)
                      : selectedOptions[opt.optional_name]?.id === item.id;

                  return (
                    <label key={item.id} className="option-item">
                      <input
                        type={opt.type === "multiple" ? "checkbox" : "radio"}
                        name={opt.optional_name}
                        checked={isChecked || false}
                        onChange={(e) => handleSelectOption(opt, item, e)}
                      />

                      <span>
                        {item.name}
                        {item.price > 0 && ` (+${item.price})`}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="modal-footer">
          <h3>Total: Rp {totalPrice}</h3>

          <button className="add-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductModal;