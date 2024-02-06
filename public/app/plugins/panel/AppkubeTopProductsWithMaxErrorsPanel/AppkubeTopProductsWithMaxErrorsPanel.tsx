import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeTopProductsWithMaxErrorsPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="top-products-errors-panel">
        <div className="top-products-errors-inner">
          <div className="top-products-errors-heading">Top Products With Max Errors</div>
          <div className="errors-boxes">
            <div className="errors-box">
              <div className="icon">
                <span></span>
                <div className="percent">
                  <svg>
                    <circle cx="28" cy="28" r="26"></circle>
                    <circle cx="28" cy="28" r="26" style={{ '--percent': '15' } as React.CSSProperties}></circle>
                  </svg>
                </div>
              </div>
              <div className="contents">
                <div className="name">Product 1 Errors</div>
                <div className="price">
                  <strong>1562</strong>
                  <span>10%</span>
                </div>
              </div>
            </div>
            <div className="errors-box">
              <div className="icon">
                <span></span>
                <div className="percent">
                  <svg>
                    <circle cx="28" cy="28" r="26"></circle>
                    <circle cx="28" cy="28" r="26" style={{ '--percent': '20' } as React.CSSProperties}></circle>
                  </svg>
                </div>
              </div>
              <div className="contents">
                <div className="name">Product 2 Errors</div>
                <div className="price">
                  <strong>1562</strong>
                  <span>10%</span>
                </div>
              </div>
            </div>
            <div className="errors-box">
              <div className="icon">
                <span></span>
                <div className="percent">
                  <svg>
                    <circle cx="28" cy="28" r="26"></circle>
                    <circle cx="28" cy="28" r="26" style={{ '--percent': '8' } as React.CSSProperties}></circle>
                  </svg>
                </div>
              </div>
              <div className="contents">
                <div className="name">Product 3 Errors</div>
                <div className="price">
                  <strong>1562</strong>
                  <span>10%</span>
                </div>
              </div>
            </div>
            <div className="errors-box">
              <div className="icon">
                <span></span>
                <div className="percent">
                  <svg>
                    <circle cx="28" cy="28" r="26"></circle>
                    <circle cx="28" cy="28" r="26" style={{ '--percent': '7' } as React.CSSProperties}></circle>
                  </svg>
                </div>
              </div>
              <div className="contents">
                <div className="name">Product 4 Errors</div>
                <div className="price">
                  <strong>1562</strong>
                  <span>10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeTopProductsWithMaxErrorsPanel;
