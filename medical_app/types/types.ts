import { LucideIcon } from "lucide-react";

export interface decodedToken {
    id: string,
    email: string,
    role: string
};

export interface children{
    children: React.ReactNode
}

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
};

// used for recent appointements prop type
export type RecentProps = {
  patientName: string;
  email: string;
  phoneNumber: string;
};

