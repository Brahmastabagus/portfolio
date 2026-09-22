import React from "react";
import {
  ShieldCheck,
  Cloud,
  Award,
  BookCheck,
  Trophy,
  ExternalLink,
} from "lucide-react";
import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/panel";

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
    id: "teknoko-hki",
    title: "TEKNOKO — Store Management App (Hak Cipta / HKI)",
    issuer: "Kementerian Hukum dan Hak Asasi Manusia RI",
    date: "May 2022",
    credentialId: "No. 000344816 (EC00202229256)",
    category: "Registered Intellectual Property (Copyright)",
    verifyUrl:
      "https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
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
    id: "prima-2019",
    title: "1st Place — Web Design Competition (PRIMA 2019)",
    issuer: "Amikom Student Scientific Fair",
    date: "2019",
    category: "Competition Award",
    icon: Trophy,
  },
  {
    id: "prima-2018",
    title: "2nd Place — Web Design Competition (PRIMA 2018)",
    issuer: "Amikom Student Scientific Fair",
    date: "2018",
    category: "Competition Award",
    icon: Trophy,
  },
];

export function Certifications() {
  return (
    <Panel id="certifications" aria-label="Certifications and Awards">
      <PanelHeader>
        <PanelTitle>
          <a href="#certifications" className="hover:underline">Certifications & Awards</a>
          <PanelTitleSup>[{CERTIFICATIONS_DATA.length}]</PanelTitleSup>
        </PanelTitle>
        <PanelDescription>
          Government-recognized credentials, registered IP & competition awards
        </PanelDescription>
      </PanelHeader>

      <PanelContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {CERTIFICATIONS_DATA.map((cert) => {
            const Icon = cert.icon;

            return (
              <div
                key={cert.id}
                className="rounded-lg border border-border/70 bg-card/40 p-3.5 sm:p-4 flex flex-col justify-between gap-3.5 transition-colors hover:border-border hover:bg-card/70"
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="size-7 rounded-md border border-border bg-muted/60 flex items-center justify-center text-accent-blue shrink-0">
                      <Icon className="size-3.5" />
                    </div>
                    <span className="text-[11px] font-mono text-muted-foreground px-2 py-0.5 rounded bg-muted/40 border border-border/60">
                      {cert.date}
                    </span>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-xs sm:text-sm font-semibold text-foreground leading-snug">
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
                    <span className="text-muted-foreground/70 text-[11px]">
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
      </PanelContent>
    </Panel>
  );
}
