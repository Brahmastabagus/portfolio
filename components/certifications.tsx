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
        <ul className="border-t border-border/60">
          {CERTIFICATIONS_DATA.map((cert) => (
            <li
              key={cert.id}
              className="flex flex-col gap-1 border-b border-border/60 py-3 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-foreground">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                {cert.credentialId ? (
                  <p className="mt-0.5 font-mono text-xs text-muted-foreground" title={cert.credentialId}>
                    ID: {cert.credentialId}
                  </p>
                ) : null}
              </div>
              <div className="flex shrink-0 items-center gap-3 font-mono text-xs text-muted-foreground">
                <span>{cert.date}</span>
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-accent-blue hover:underline"
                    aria-label={`Verify credential for ${cert.title}`}
                  >
                    <span>Verify</span>
                    <ExternalLink className="size-3" />
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  );
}
