import {
  Competency,
  categoryColors,
  skillTypeColors,
} from "@shared/competencies";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Users, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

interface CompetencyModalProps {
  competency: Competency | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CompetencyModal({
  competency,
  isOpen,
  onClose,
}: CompetencyModalProps) {
  if (!competency) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border border-border"
        style={{ backgroundColor: "rgb(38, 33, 43)", borderRadius: "13px" }}
      >
        <DialogHeader>
          <DialogTitle
            className="text-foreground text-left"
            style={{
              fontSize: "31.68px",
              lineHeight: "41.184px",
              fontWeight: "600",
            }}
          >
            {competency.competency}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Categories and Type */}
          <div className="flex flex-wrap gap-3">
            <Badge
              variant="outline"
              className="text-sm border text-white"
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
                "text-sm border",
                skillTypeColors[
                  competency.skillType as keyof typeof skillTypeColors
                ] || "bg-gray-100 text-gray-700 border-gray-200",
              )}
            >
              {competency.skillType}
            </Badge>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {competency.description}
            </p>
          </div>

          {/* Tools */}
          {competency.tools && competency.tools.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Wrench className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-semibold text-lg">Tools & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {competency.tools.map((tool, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {competency.skills && competency.skills.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-semibold text-lg">Key Skills</h3>
              </div>
              <div className="grid gap-2">
                {competency.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 bg-muted/50 rounded-md"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
