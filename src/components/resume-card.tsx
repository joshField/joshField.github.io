"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Abbreviate full month names (e.g. "August 2022" -> "Aug 2022") so the date
  // fits on one line on narrow/mobile screens.
  const abbreviatedPeriod = period.replace(
    /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/g,
    (month) => month.slice(0, 3)
  );

  const handleClick = (e: React.MouseEvent) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  const avatar = (
    <Avatar className="border size-12 m-auto bg-white">
      <AvatarImage
        src={logoUrl}
        alt={altText}
        className={`object-contain ${logoUrl.includes('caltech-circle.png') ? '' : 'p-1.5'}`}
      />
      <AvatarFallback>{altText[0]}</AvatarFallback>
    </Avatar>
  );

  const cardContent = (
    <Card
      className={cn(
        "flex p-2 transition-colors",
        (description || href) && "hover:bg-muted/50"
      )}
    >
      <div className="flex-none">
        {description && href ? (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="cursor-pointer"
          >
            {avatar}
          </Link>
        ) : (
          avatar
        )}
      </div>
      <div className="flex-grow ml-4 items-center flex-col group">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              {title}
              {badges && (
                <span className="inline-flex gap-x-1">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs"
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
              {description && (
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-40 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              )}
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right whitespace-nowrap">
              <span className="sm:hidden">{abbreviatedPeriod}</span>
              <span className="hidden sm:inline">{period}</span>
            </div>
          </div>
          {subtitle && (
            <div className="font-sans text-xs whitespace-pre-line">
              <Markdown
                className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert"
                components={{
                  p: ({ children }) => <span>{children}</span>,
                  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                }}
              >
                {subtitle}
              </Markdown>
            </div>
          )}
        </CardHeader>
        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2 text-xs sm:text-sm"
          >
            <Markdown
              className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
              components={{
                a: ({ href, ...props }) => {
                  if (!href) return <a {...props} />;

                  if (href.startsWith("#")) {
                    return (
                      <a
                        href={href}
                        onClick={(e) => e.stopPropagation()}
                        {...props}
                      />
                    );
                  }

                  return (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      {...props}
                    />
                  );
                }
              }}
            >
              {description}
            </Markdown>
          </motion.div>
        )}
      </div>
    </Card>
  );

  // If there's a description, make the entire card clickable without Link
  // If there's no description but there's an href, wrap in Link
  if (description) {
    return (
      <div className="block cursor-pointer" onClick={handleClick}>
        {cardContent}
      </div>
    );
  } else if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
      >
        {cardContent}
      </Link>
    );
  } else {
    return <div className="block">{cardContent}</div>;
  }
};
