import { useEffect, useRef, useState } from "react";
import ExpandMore from "../../assets/icons/expand-more.svg";
import "./Input.css";

export const TextInput = ({ label, id, value, onChange, placeholder }) => {
  return (
    <div className="text-input">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={value || ""}
        onChange={(e) => onChange(id, e.target.value)}
        placeholder={placeholder}
        name={id}
      ></input>
    </div>
  );
};

export const ContactNumberInput = ({
  label,
  codeId,
  numberId,
  countryCode,
  number,
  onChange,
}) => {
  const [show, setShow] = useState(0);
  const dropdown = useRef();
  useEffect(() => {
    const clickHandler = (e) => {
      if (dropdown.current.contains(e.target) === false) {
        setShow(false);
      }
    };

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);
  const codes = ["+1", "+91", "+44"];

  return (
    <div className="contact-number-input">
      <div className="label">{label}</div>
      <div className="values">
        <div
          ref={dropdown}
          onClick={() => {
            setShow(!show);
          }}
          className="code"
        >
          <span>{countryCode || "Code"}</span>
          <img src={ExpandMore} />
          {show === true && (
            <ul className="dropdown">
              {codes.map((code) => {
                return (
                  <li
                    key={code}
                    className={code === countryCode ? "active" : ""}
                    onClick={() => {
                      onChange(codeId, code);
                    }}
                  >
                    {code}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="number">
          <input
            type="text"
            maxLength={10}
            value={number || ""}
            onChange={(e) => {
              if (e.target.value.length > 0) {
                var c = e.target.value[e.target.value.length - 1];
                if (e.target.value.length == 1 && c == "0") return;
                if (!(c >= "0" && c <= "9")) {
                  return;
                }
              }
              onChange(numberId, e.target.value);
            }}
            placeholder="Number"
          />
        </div>
      </div>
    </div>
  );
};
