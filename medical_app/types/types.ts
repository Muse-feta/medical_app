import { LucideIcon } from "lucide-react";

export interface decodedToken {
    id: string,
    email: string
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

