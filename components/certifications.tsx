import React from "react";
import {
  ShieldCheck,
  Cloud,
  Award,
  BookCheck,
  Trophy,
  ExternalLink,
} from "lucide-react";

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: string;
  verifyUrl?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "bnsp",
    title: "Junior Web Developer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "January 2024",
    credentialId: "TIK.317.00195 2024",
    category: "National Professional Certification",
    icon: ShieldCheck,
  },
  {
    id: "aws",
    title: "AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services (AWS) Academy",
    date: "November 2022",
    category: "Cloud Architecture Credential",
    verifyUrl:
      "https://www.credly.com/badges/bec9d255-1fd6-44ac-a582-63f6dff6ea5f/public_url",
    icon: Cloud,
  },
  {
    id: "sikoku-hki",
    title: "SIKOKU Web Psychotest Platform (HKI)",
    issuer: "Ministry of Law & Human Rights (Kemenkumham RI)",
    date: "June 2022",
    category: "Software Copyright / Hak Cipta",
    icon: Award,
  },
  {
    id: "teknoko-hki",
    title: "TEKNOKO Store Management App (HKI)",
    issuer: "Ministry of Law & Human Rights (Kemenkumham RI)",
    date: "Certified IP",
    category: "Software Copyright / Hak Cipta",
    icon: Award,
  },
  {
    id: "binar",
    title: "Fullstack Web Development Independent Study",
    issuer: "Binar Academy (Kampus Merdeka)",
    date: "July 2023",
    credentialId: "Hard-skill Score: 4.9 / 5.0 (Avg 97)",
    category: "Certified Fullstack Program",
    icon: BookCheck,
  },
  {
    id: "prima",
    title: "1st Place — Web Design Competition (PRIMA 2019)",
    issuer: "Amikom Student Scientific Fair",
    date: "2019",
    category: "Competition Award",
    icon: Trophy,
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="flex flex-col gap-6 scroll-mt-6"
      aria-label="Certifications and Awards"
    >
      <div className="flex flex-col gap-1 border-b border-border/60 pb-3">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          Certifications & Awards
        </h2>
        <p className="text-sm font-mono text-muted-foreground">
          Government-recognized credentials, intellectual property, and competition wins
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {CERTIFICATIONS_DATA.map((cert) => {
          const Icon = cert.icon;

          return (
            <div
              key={cert.id}
              className="rounded-xl border border-border/70 bg-card/40 p-4 sm:p-5 flex flex-col justify-between gap-4 transition-all hover:border-border hover:bg-card/70"
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="size-8 rounded-lg border border-border bg-muted/60 flex items-center justify-center text-accent-blue shrink-0">
                    <Icon className="size-4" />
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground px-2 py-0.5 rounded bg-muted/40 border border-border/60">
                    {cert.date}
                  </span>
                </div>

                <div className="flex flex-col gap-0.5">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-foreground/80 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 pt-2 border-t border-border/50 text-xs font-mono">
                {cert.credentialId ? (
                  <span className="text-muted-foreground truncate" title={cert.credentialId}>
                    ID: {cert.credentialId}
                  </span>
                ) : (
                  <span className="text-muted-foreground">
                    {cert.category}
                  </span>
                )}

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent-blue hover:underline shrink-0 font-medium"
                    aria-label={`Verify credential for ${cert.title}`}
                  >
                    <span>Verify</span>
                    <ExternalLink className="size-3" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
