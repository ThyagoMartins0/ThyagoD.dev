"use client";

import { I18nText } from "@/components/ui/I18nText";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="hero-inner">
        <div>
          <div className="hero-status">
            <div className="status-dot" />
            <I18nText k="hero_status" />
          </div>
          <p className="hero-sub">Midlevel Full Stack Engineer</p>
          <h1>
            Thyago
            <br />
            C. Martins
            <br />
            <span className="dim">Backend · Cloud</span>
          </h1>
          <p className="hero-desc">
            <I18nText k="hero_desc" />
          </p>
          <div className="hero-btns">
            <a href="#proj" className="btn-p">
              <I18nText k="hero_btn1" />
            </a>
            <a
              href="https://github.com/thyagomartins0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-s"
            >
              GitHub →
            </a>
          </div>
          <div className="hero-metrics">
            <div className="metric">
              <div className="num">4+</div>
              <div className="lbl">
                <I18nText k="m_yrs" />
              </div>
            </div>
            <div className="metric">
              <div className="num">70M+</div>
              <div className="lbl">
                <I18nText k="m_users" />
              </div>
            </div>
            <div className="metric">
              <div className="num">10</div>
              <div className="lbl">
                <I18nText k="m_cos" />
              </div>
            </div>
            <div className="metric">
              <div className="num">3</div>
              <div className="lbl">
                <I18nText k="m_countries" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-card-wrap">
          <div className="hero-card">
            <div className="card-top">
              <div className="dots">
                <div className="dot dr" />
                <div className="dot dy" />
                <div className="dot dg" />
              </div>
              <div className="card-file">iam/identity.service.ts — Capgemini</div>
            </div>
            <div className="card-body">
              <div className="cl">
                <span className="ln">01</span>
                <span className="c">{"// IAM — 20M+ users · Banco Bradesco"}</span>
              </div>
              <div className="cl">
                <span className="ln">02</span>
              </div>
              <div className="cl">
                <span className="ln">03</span>
                <span className="k">@Injectable()</span>
              </div>
              <div className="cl">
                <span className="ln">04</span>
                <span className="k">export class </span>
                <span className="fn">IdentityService </span>
                <span className="p">{"{"}</span>
              </div>
              <div className="cl">
                <span className="ln">05</span>
                <span>&nbsp;&nbsp;</span>
                <span className="k">async </span>
                <span className="fn">authenticate</span>
                <span className="p">(</span>
                <span className="v">dto: AuthDto</span>
                <span className="p">): </span>
                <span className="v">Promise&lt;Token&gt;</span>
                <span className="p"> {"{"}</span>
              </div>
              <div className="cl">
                <span className="ln">06</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="k">const </span>
                <span className="v">user </span>
                <span className="k">= await this</span>
                <span className="p">.</span>
                <span className="fn">ldapService</span>
                <span className="p">.</span>
                <span className="fn">verify</span>
                <span className="p">(</span>
                <span className="v">dto</span>
                <span className="p">)</span>
              </div>
              <div className="cl">
                <span className="ln">07</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="k">if</span>
                <span className="p"> (!</span>
                <span className="v">user</span>
                <span className="p">.</span>
                <span className="v">active</span>
                <span className="p">) </span>
                <span className="k">throw new </span>
                <span className="fn">UnauthorizedException</span>
                <span className="p">()</span>
              </div>
              <div className="cl">
                <span className="ln">08</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="k">return this</span>
                <span className="p">.</span>
                <span className="fn">jwtService</span>
                <span className="p">.</span>
                <span className="fn">sign</span>
                <span className="p">({"{"} </span>
                <span className="v">sub</span>
                <span className="p">: </span>
                <span className="v">user</span>
                <span className="p">.</span>
                <span className="v">id </span>
                <span className="p">{"})"}</span>
              </div>
              <div className="cl">
                <span className="ln">09</span>
                <span>&nbsp;&nbsp;</span>
                <span className="p">{"}"}</span>
              </div>
              <div className="cl">
                <span className="ln">10</span>
                <span className="p">{"}"}</span>
              </div>
            </div>
          </div>
          <div className="hero-float">
            <div className="float-icon">✅</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700 }}>
                <I18nText k="hero_float_title" />
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "var(--text4)",
                  marginTop: 1,
                }}
              >
                <I18nText k="hero_float_sub" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
