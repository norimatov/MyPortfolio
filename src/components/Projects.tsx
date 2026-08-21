import { useState, type KeyboardEvent, type MouseEvent } from 'react';
import { projects, type Project } from '../data/portfolio';
import { Reveal } from './Reveal';

const statusLabel: Record<Project['status'], string> = {
  production: 'production',
  'in-progress': 'jarayonda',
  archived: 'arxivlangan',
};

const statusClass: Record<Project['status'], string> = {
  production: 'status-production',
  'in-progress': 'status-in-progress',
  archived: 'status-archived',
};

const VISIBLE_COUNT = 4;

function initials(name: string): string {
  return name
    .split(/[\s-]+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

/** Karta uchun asosiy manzil: avval Live, bo'lmasa Repo */
function primaryUrl(project: Project): string | undefined {
  return project.liveUrl ?? project.repoUrl;
}

function openInNewTab(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, VISIBLE_COUNT);
  const hiddenCount = projects.length - VISIBLE_COUNT;

  const handleCardClick = (project: Project) => (event: MouseEvent<HTMLElement>) => {
    // Ichki "Live"/"Repo" havolalari o'zi ishlaydi — kartaning boshqa joyiga bosilganda ham ochilishi uchun
    const target = event.target as HTMLElement;
    if (target.closest('a')) return;
    const url = primaryUrl(project);
    if (url) openInNewTab(url);
  };

  const handleCardKeyDown = (project: Project) => (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      const url = primaryUrl(project);
      if (url) {
        event.preventDefault();
        openInNewTab(url);
      }
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <div className="section-eyebrow mono">ls projects/</div>
          <h2 className="section-title">Loyihalar</h2>
          <p className="section-desc">
            G'oyadan production'gacha yakunlangan tanlangan ishlar — barchasi serverga joylashtirilgan.
            Kartaning istalgan joyiga bosing — loyiha yangi oynada ochiladi.
          </p>
        </Reveal>

        <div className="projects-grid">
          {visibleProjects.map((project, idx) => {
            const url = primaryUrl(project);
            return (
              <Reveal key={project.id} delay={(idx % VISIBLE_COUNT) * 70}>
                <article
                  className={`glass project-card ${url ? 'is-clickable' : ''}`}
                  onClick={url ? handleCardClick(project) : undefined}
                  onKeyDown={url ? handleCardKeyDown(project) : undefined}
                  role={url ? 'link' : undefined}
                  tabIndex={url ? 0 : undefined}
                  aria-label={url ? `${project.name} loyihasini yangi oynada ochish` : undefined}
                >
                  <div className="project-card-top">
                    <div className="project-name-row">
                      <span className="project-avatar">{initials(project.name)}</span>
                      <h3 className="project-name">{project.name}</h3>
                    </div>
                    <span className={`project-status ${statusClass[project.status]}`}>
                      {statusLabel[project.status]}
                    </span>
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="stack-tag mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-footer">
                    <span className="project-metric mono">{project.metric}</span>
                    <div className="project-links">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Yangi oynada ochiladi"
                        >
                          Live ↗
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Yangi oynada ochiladi"
                        >
                          Repo ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {hiddenCount > 0 && (
          <div className="projects-toggle">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
            >
              {showAll ? '↑ Kamroq ko\'rsatish' : `Yana ${hiddenCount} ta loyihani ko'rsatish ↓`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
// shunchaki commit uchun 