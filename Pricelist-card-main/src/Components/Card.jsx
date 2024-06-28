// Card.jsx
import React from "react";
import "./style/Card.css";

const Card = ({ arrObj }) => {
  return (
    <div>
      <div className="body">
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {arrObj.map((item, index) => {
            return (
              <div key={index} className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">{item.member}</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      {item.price}
                    </h1>
                    <ul>
                      <li>
                        {item.member === "FREE" ||
                        item.member === "PLUS" ||
                        item.member === "PRO" ? (
                          <i className="fa-solid fa-check text-success"></i>
                        ) : (
                          <i className="fa-solid fa-xmark text-danger"></i>
                        )}
                        {item.user}
                      </li>
                      <li>
                        {item.member === "FREE" ||
                        item.member === "PLUS" ||
                        item.member === "PRO" ? (
                          <i className="fa-solid fa-check text-success"></i>
                        ) : (
                          <i className="fa-solid fa-xmark text-danger"></i>
                        )}
                        {item.storage}
                      </li>
                      <li>
                        {item.member === "FREE" ||
                        item.member === "PLUS" ||
                        item.member === "PRO" ? (
                          <i className="fa-solid fa-check text-success"></i>
                        ) : (
                          <i className="fa-solid fa-xmark text-danger"></i>
                        )}
                        {item.project}
                      </li>
                      <li>
                        {item.member === "FREE" ||
                        item.member === "PLUS" ||
                        item.member === "PRO" ? (
                          <i className="fa-solid fa-check text-success"></i>
                        ) : (
                          <i className="fa-solid fa-xmark text-danger"></i>
                        )}
                        {item.access}
                      </li>
                      <li>
                        {item.member === "PLUS" || item.member === "PRO" ? (
                          <i className="fa-solid fa-check text-success"></i>
                        ) : (
                          <i className="fa-solid fa-xmark text-danger"></i>
                        )}
                        {item.private}
                      </li>
                      <li>
                        {item.member === "PLUS" || item.member === "PRO" ? (
                          <i className="fa-solid fa-check text-success"></i>
                        ) : (
                          <i className="fa-solid fa-xmark text-danger"></i>
                        )}
                        {item.support}
                      </li>
                      <li>
                        {item.member === "PLUS" || item.member === "PRO" ? (
                          <i className="fa-solid fa-check text-success"></i>
                        ) : (
                          <i className="fa-solid fa-xmark text-danger"></i>
                        )}
                        {item.Sub}
                      </li>
                      <li>
                        {item.member === "PRO" ? (
                          <i className="fa-solid fa-check text-success"></i>
                        ) : (
                          <i className="fa-solid fa-xmark text-danger"></i>
                        )}
                        {item.status}
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="w-100 btn btn-lg btn-outline-primary"
                    >
                      {item.btn}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
