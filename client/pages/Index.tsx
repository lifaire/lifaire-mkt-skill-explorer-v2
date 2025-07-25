import { useState, useMemo } from "react";
import { competenciesData, Competency } from "@shared/competencies";
import { CompetencyCard } from "@/components/CompetencyCard";
import { CompetencyModal } from "@/components/CompetencyModal";
import { SkillTypeTabs } from "@/components/SkillTypeTabs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, Grid3X3, List } from "lucide-react";

export default function Index() {
  const [selectedCompetency, setSelectedCompetency] =
    useState<Competency | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Extract unique categories and skill types
  const categories = useMemo(
    () => [...new Set(competenciesData.map((c) => c.category))],
    [],
  );
  const skillTypes = useMemo(
    () => [...new Set(competenciesData.map((c) => c.skillType))],
    [],
  );

  // Filter competencies based on search and filters
  const filteredCompetencies = useMemo(() => {
    return competenciesData.filter((competency) => {
      const matchesSearch =
        searchTerm === "" ||
        competency.competency
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        competency.skillType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        competency.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        (competency.roleRelevance || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        competency.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        competency.tools.some((tool) =>
          tool.toLowerCase().includes(searchTerm.toLowerCase()),
        ) ||
        competency.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesCategory =
        !selectedCategory || competency.category === selectedCategory;

      const matchesSkillType =
        activeTab === "all" || competency.skillType === activeTab;

      return matchesSearch && matchesCategory && matchesSkillType;
    });
  }, [searchTerm, selectedCategory, activeTab]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
    setActiveTab("all");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Tabs Header */}
      <SkillTypeTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* Secondary Controls */}
      <div className="border-b border-border bg-background">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Categories:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const getCategoryColor = (category: string) => {
                  switch (category) {
                    case "Strategy & Planning": return "#C2BA58";
                    case "Operations & Analytics": return "#BAC283";
                    case "Retention & Expansion": return "#D0CCD9";
                    case "Conversion & Nurturing": return "#C24A8C";
                    case "Demand Generation & Acquisition": return "#4466C2";
                    case "Personality and Mindset": return "#63C273";
                    default: return "#6B7280";
                  }
                };

                const isSelected = selectedCategory === category;
                const categoryColor = getCategoryColor(category);

                return (
                  <Badge
                    key={category}
                    variant="outline"
                    className="cursor-pointer text-white border transition-all duration-200 hover:opacity-80"
                    style={{
                      backgroundColor: isSelected ? categoryColor : `${categoryColor}40`,
                      borderColor: categoryColor,
                      opacity: isSelected ? 1 : 0.8,
                    }}
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category ? null : category,
                      )
                    }
                  >
                    {category}
                  </Badge>
                );
              })}
            </div>

            {(selectedCategory || searchTerm) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground"
              >
                Clear all
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing {filteredCompetencies.length} of {competenciesData.length}{" "}
            competencies
          </p>
        </div>

        {filteredCompetencies.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No competencies found</p>
              <p className="text-sm">
                Try adjusting your search terms or filters
              </p>
            </div>
            <Button variant="outline" onClick={clearFilters}>
              Clear filters
            </Button>
          </div>
        ) : (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                : "space-y-4"
            }
          >
            {filteredCompetencies.map((competency) => (
              <CompetencyCard
                key={competency.id}
                competency={competency}
                onClick={setSelectedCompetency}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      <CompetencyModal
        competency={selectedCompetency}
        isOpen={!!selectedCompetency}
        onClose={() => setSelectedCompetency(null)}
      />
    </div>
  );
}
