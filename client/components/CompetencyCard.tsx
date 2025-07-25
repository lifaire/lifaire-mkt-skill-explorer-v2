import {
  Competency,
  categoryColors,
  skillTypeColors,
} from "@shared/competencies";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Users, Wrench, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CompetencyCardProps {
  competency: Competency;
  onClick: (competency: Competency) => void;
}

// Category color coding with specified hex colors - lighter hues for card backgrounds
const categoryBackgroundColors = {
  "Strategy & Planning": "rgba(194, 186, 88, 0.05)", // #C2BA58
  "Operations & Analytics": "rgba(186, 194, 131, 0.05)", // #BAC283
  "Retention & Expansion": "rgba(208, 204, 217, 0.05)", // #D0CCD9
  "Conversion & Nurturing": "rgba(194, 74, 140, 0.05)", // #C24A8C
  "Demand Generation & Acquisition": "rgba(68, 102, 194, 0.05)", // #4466C2
  "Personality and Mindset": "rgba(99, 194, 115, 0.05)", // #63C273
};

const categoryBorderColors = {
  "Strategy & Planning": "rgba(194, 186, 88, 0.1)", // #C2BA58
  "Operations & Analytics": "rgba(186, 194, 131, 0.1)", // #BAC283
  "Retention & Expansion": "rgba(208, 204, 217, 0.1)", // #D0CCD9
  "Conversion & Nurturing": "rgba(194, 74, 140, 0.1)", // #C24A8C
  "Demand Generation & Acquisition": "rgba(68, 102, 194, 0.1)", // #4466C2
  "Personality and Mindset": "rgba(99, 194, 115, 0.1)", // #63C273
};

export function CompetencyCard({ competency, onClick }: CompetencyCardProps) {

  const categoryBg = categoryBackgroundColors[competency.category as keyof typeof categoryBackgroundColors] || "rgba(107, 114, 128, 0.1)";
  const categoryBorder = categoryBorderColors[competency.category as keyof typeof categoryBorderColors] || "rgba(107, 114, 128, 0.2)";

  return (
    <Card
      className="cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 bg-card border border-border shadow-lg group relative"
      style={{
        backgroundColor: "rgb(38, 33, 43)",
        borderRadius: "13px",
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 20px 40px -10px",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        borderColor: categoryBorder,
        background: `linear-gradient(135deg, ${categoryBg}, rgb(38, 33, 43))`,
      }}
      onClick={() => onClick(competency)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <h3
            className="font-medium text-foreground"
            style={{
              fontSize: "18.416px",
              lineHeight: "19.2px",
              fontWeight: "500",
            }}
          >
            {competency.competency}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge
            variant="outline"
            className="text-xs border text-white"
            style={{
              backgroundColor: competency.category === "Strategy & Planning" ? "#C2BA58" :
                             competency.category === "Operations & Analytics" ? "#BAC283" :
                             competency.category === "Retention & Expansion" ? "#D0CCD9" :
                             competency.category === "Conversion & Nurturing" ? "#C24A8C" :
                             competency.category === "Demand Generation & Acquisition" ? "#4466C2" :
                             competency.category === "Personality and Mindset" ? "#63C273" :
                             "#6B7280",
              borderColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            {competency.category}
          </Badge>
          <Badge
            variant="outline"
            className={cn(
              "text-xs border",
              skillTypeColors[
                competency.skillType as keyof typeof skillTypeColors
              ] || "bg-gray-100 text-gray-700 border-gray-200",
            )}
          >
            {competency.skillType}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {competency.description}
        </p>

        <div className="space-y-3">
          {/* Always show tools section */}
          <div className="flex items-start gap-2">
            <Wrench className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
            <div className="flex flex-wrap gap-1">
              {competency.tools && competency.tools.length > 0 ? (
                <>
                  {competency.tools.slice(0, 3).map((tool, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                  {competency.tools.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{competency.tools.length - 3} more
                    </Badge>
                  )}
                </>
              ) : (
                <Badge variant="secondary" className="text-xs">
                  Various tools
                </Badge>
              )}
            </div>
          </div>

          {/* Always show skills section */}
          <div className="flex items-start gap-2">
            <Users className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
            <div className="text-xs text-muted-foreground">
              {competency.skills && competency.skills.length > 0 ? (
                <>
                  {competency.skills.length} skills including{" "}
                  {competency.skills[0]?.substring(0, 40)}
                  {competency.skills[0]?.length > 40 ? "..." : ""}
                </>
              ) : (
                "Multiple skills included"
              )}
            </div>
          </div>
        </div>

        {/* Bottom right arrow indicator */}
        <div className="flex justify-end mt-4">
          <div
            className="flex items-center justify-center w-6 h-6 rounded-full bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-200"
            style={{ background: "rgba(255, 255, 255, 0.1)" }}
          >
            <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-200">
              &gt;
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
