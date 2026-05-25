"use client";

import { useEffect, useMemo, useState } from "react";
import { I18nText } from "@/components/ui/I18nText";
import { useLanguage } from "@/i18n/LanguageProvider";
import {
  PROJECTS_PER_PAGE,
  defaultCrmProject,
  p2Stack,
  projectPagination,
  vivoProject,
} from "@/data/projects";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function MetricsRow({
  users,
  securityLabel,
}: {
  users: string;
  securityLabel: string;
}) {
  return (
    <div className="proj-nums">
      <div className="pn">
        <div className="pn-num">{users}</div>
        <div className="pn-lbl">
          <I18nText k="p1_m1" />
        </div>
      </div>
      <div className="pn">
        <div className="pn-num">99.99%</div>
        <div className="pn-lbl">uptime</div>
      </div>
      <div className="pn">
        <div className="pn-num">{securityLabel}</div>
        <div className="pn-lbl">
          <I18nText k="p1_m3" />
        </div>
      </div>
    </div>
  );
}

function useProjectCards() {
  const { lang } = useLanguage();

  return useMemo(
    () => [
      {
        id: "p1",
        delay: "",
        node: (
          <div className="proj-body">
            <I18nText k="p1_cat" as="div" className="proj-cat" />
            <h3>
              <I18nText k="p1_h3" />
            </h3>
            <p>
              <I18nText k="p1_desc" />
            </p>
            <div className="proj-stack">
              {["Java", "Spring Boot", "LDAP", "JWT", "PostgreSQL", "Kubernetes"].map((tech) => (
                <span key={tech} className="ptech">
                  {tech}
                </span>
              ))}
            </div>
            <MetricsRow users="70M+" securityLabel="High" />
            <br />
            <span className="enterprise-badge">
              <I18nText k="enterprise_badge" />
            </span>
          </div>
        ),
      },
      {
        id: "vivo",
        delay: "d1",
        node: (
          <div className="proj-body">
            <div className="proj-cat">{vivoProject.cat[lang]}</div>
            <h3>{vivoProject.title[lang]}</h3>
            <p>{vivoProject.desc[lang]}</p>
            <div className="proj-stack">
              {p2Stack[lang].map((tech) => (
                <span key={tech} className="ptech">
                  {tech}
                </span>
              ))}
            </div>
            <MetricsRow
              users={vivoProject.metrics.users}
              securityLabel={vivoProject.metrics.security[lang]}
            />
            <br />
            <span className="enterprise-badge">{vivoProject.badge[lang]}</span>
          </div>
        ),
      },
      {
        id: "p3",
        delay: "d2",
        node: (
          <div className="proj-body">
            <I18nText k="p3_cat" as="div" className="proj-cat" />
            <h3>
              <I18nText k="p3_h3" />
            </h3>
            <p>
              <I18nText k="p3_desc" />
            </p>
            <div className="proj-stack">
              {["NestJS", "Laravel", "React Native", "MySQL"].map((tech) => (
                <span key={tech} className="ptech">
                  {tech}
                </span>
              ))}
            </div>
            <span className="enterprise-badge">
              <I18nText k="enterprise_badge" />
            </span>
          </div>
        ),
      },
      {
        id: "p5",
        delay: "",
        node: (
          <div className="proj-body">
            <div className="p5-badge">
              <I18nText k="p5_badge" />
            </div>
            <I18nText k="p5_cat" as="div" className="proj-cat" />
            <h3>
              <I18nText k="p5_h3" />
            </h3>
            <p>
              <I18nText k="p5_desc" />
            </p>
            <div className="proj-stack">
              {["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "brapi.dev", "AI"].map(
                (tech) => (
                  <span key={tech} className="ptech">
                    {tech}
                  </span>
                ),
              )}
            </div>
            <div className="proj-nums" style={{ marginBottom: 26 }}>
              <div className="pn">
                <div className="pn-num">
                  <I18nText k="p5_m1_v" />
                </div>
                <div className="pn-lbl">
                  <I18nText k="p5_m1_l" />
                </div>
              </div>
              <div className="pn">
                <div className="pn-num">PT/EN/ES</div>
                <div className="pn-lbl">
                  <I18nText k="p5_m2_l" />
                </div>
              </div>
              <div className="pn">
                <div className="pn-num">
                  <I18nText k="p5_m3_v" />
                </div>
                <div className="pn-lbl">
                  <I18nText k="p5_m3_l" />
                </div>
              </div>
            </div>
            <a
              href="https://github.com/thyagomartins0"
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link"
            >
              <I18nText k="see_gh" /> <ArrowIcon />
            </a>
          </div>
        ),
      },
      {
        id: "p6",
        delay: "d1",
        node: (
          <div className="proj-body">
            <div className="p5-badge">
              <I18nText k="p5_badge" />
            </div>
            <I18nText k="p6_cat" as="div" className="proj-cat" />
            <h3>
              <I18nText k="p6_h3" />
            </h3>
            <p>
              <I18nText k="p6_desc" />
            </p>
            <div className="proj-stack">
              {[
                "React",
                "TypeScript",
                "Vite",
                "React Router",
                "Tailwind CSS",
                "i18next",
                "Docker",
                "Nginx",
              ].map((tech) => (
                <span key={tech} className="ptech">
                  {tech}
                </span>
              ))}
            </div>
            <div className="proj-nums" style={{ marginBottom: 26 }}>
              <div className="pn">
                <div className="pn-num">
                  <I18nText k="p6_m1_v" />
                </div>
                <div className="pn-lbl">
                  <I18nText k="p6_m1_l" />
                </div>
              </div>
              <div className="pn">
                <div className="pn-num">PT/EN/ES</div>
                <div className="pn-lbl">
                  <I18nText k="p6_m2_l" />
                </div>
              </div>
              <div className="pn">
                <div className="pn-num">
                  <I18nText k="p6_m3_v" />
                </div>
                <div className="pn-lbl">
                  <I18nText k="p6_m3_l" />
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "default-crm",
        delay: "",
        node: (
          <div className="proj-body">
            <div className="proj-cat">{defaultCrmProject.cat[lang]}</div>
            <h3>{defaultCrmProject.title[lang]}</h3>
            <p>{defaultCrmProject.desc[lang]}</p>
            <div className="proj-stack">
              {defaultCrmProject.stack.map((tech) => (
                <span key={tech} className="ptech">
                  {tech}
                </span>
              ))}
            </div>
            <br />
            <span className="enterprise-badge">{defaultCrmProject.badge[lang]}</span>
          </div>
        ),
      },
      {
        id: "p4",
        delay: "d2",
        node: (
          <div className="proj-body">
            <I18nText k="p4_cat" as="div" className="proj-cat" />
            <h3>
              <I18nText k="p4_h3" />
            </h3>
            <p>
              <I18nText k="p4_desc" />
            </p>
            <div className="proj-stack">
              {["Python", "Telegram API", "Docker", "AWS"].map((tech) => (
                <span key={tech} className="ptech">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/thyagomartins0"
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link"
            >
              <I18nText k="see_gh" /> <ArrowIcon />
            </a>
          </div>
        ),
      },
    ],
    [lang],
  );
}

function ProjectPagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}) {
  const { lang } = useLanguage();

  return (
    <div className="proj-pagination reveal">
      <button
        type="button"
        className="proj-page-btn"
        disabled={page === 0}
        onClick={() => onChange(page - 1)}
        aria-label={projectPagination.prev[lang]}
      >
        ← {projectPagination.prev[lang]}
      </button>

      <div className="proj-page-list" role="tablist" aria-label={projectPagination.page[lang]}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={page === i}
            aria-label={`${projectPagination.page[lang]} ${i + 1}`}
            className={`proj-page-num${page === i ? " active" : ""}`}
            onClick={() => onChange(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <span className="proj-page-info">
        {projectPagination.page[lang]} {page + 1} {projectPagination.of[lang]} {totalPages}
      </span>

      <button
        type="button"
        className="proj-page-btn"
        disabled={page >= totalPages - 1}
        onClick={() => onChange(page + 1)}
        aria-label={projectPagination.next[lang]}
      >
        {projectPagination.next[lang]} →
      </button>
    </div>
  );
}

export function Projects() {
  const [page, setPage] = useState(0);
  const [hasPaginated, setHasPaginated] = useState(false);
  const projectCards = useProjectCards();
  const totalPages = Math.ceil(projectCards.length / PROJECTS_PER_PAGE);

  const visibleCards = projectCards.slice(
    page * PROJECTS_PER_PAGE,
    (page + 1) * PROJECTS_PER_PAGE,
  );

  useEffect(() => {
    if (page === 0) return;
    document.getElementById("proj")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [page]);

  const handlePageChange = (nextPage: number) => {
    const clampedPage = Math.max(0, Math.min(nextPage, totalPages - 1));
    if (clampedPage !== page) setHasPaginated(true);
    setPage(clampedPage);
  };

  return (
    <section id="proj">
      <div className="sec-inner">
        <I18nText k="proj_tag" as="span" className="stag reveal" />
        <I18nText k="proj_h2" as="h2" className="sh2 reveal" />

        <div className="proj-grid">
          {visibleCards.map((project) => (
            <div
              key={project.id}
              className={`proj-card reveal${hasPaginated ? " vis" : ""}${project.delay ? ` ${project.delay}` : ""}`}
            >
              {project.node}
            </div>
          ))}
        </div>

        <ProjectPagination page={page} totalPages={totalPages} onChange={handlePageChange} />
      </div>
    </section>
  );
}
