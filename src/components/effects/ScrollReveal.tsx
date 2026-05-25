"use client";

import { useEffect } from "react";

function observeRevealElements(
  revObs: IntersectionObserver,
  root: ParentNode = document,
) {
  root.querySelectorAll(".reveal:not(.vis)").forEach((el) => revObs.observe(el));
}

export function ScrollReveal() {
  useEffect(() => {
    const revObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("vis");
            revObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    observeRevealElements(revObs);

    const mutObs = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            observeRevealElements(revObs, node);
          }
        });
      });
    });

    mutObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      revObs.disconnect();
      mutObs.disconnect();
    };
  }, []);

  return null;
}
