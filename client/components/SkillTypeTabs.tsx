import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillTypeTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export function SkillTypeTabs({
  activeTab,
  onTabChange,
  searchTerm,
  onSearchChange,
}: SkillTypeTabsProps) {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const tabs = [
    { id: "soft skills", label: "soft", displayLabel: "Soft Skills" },
    { id: "technical skills", label: "tech", displayLabel: "Technical Skills" },
    { id: "all", label: "All skills", displayLabel: "All Skills" },
  ];

  return (
    <div
      className="border-b border-border bg-background"
      style={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        left: "0px",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingTop: "16px",
        position: "relative",
        backgroundColor: "rgb(26, 21, 31)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center mb-4"
        style={{
          alignItems: "center",
          display: "flex",
          height: "28px",
          marginBottom: "16px",
        }}
      >
        <span
          className="flex items-center pr-6"
          style={{
            alignItems: "center",
            display: "flex",
            paddingRight: "24px",
          }}
        >
          <h2
            className="text-foreground"
            style={{
              fontFamily:
                '"Inter Display", -apple-system, system-ui, "system-ui", "Segoe UI", Roboto, oxygen-sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              fontSize: "23px",
              fontWeight: "675",
              letterSpacing: "-0.16px",
              lineHeight: "28.75px",
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Explore by skill type
          </h2>
        </span>

        {/* Right side actions */}
        <div className="flex items-center ml-auto gap-3"></div>
      </div>

      {/* Tabs and Controls */}
      <div
        className="flex items-start"
        style={{
          alignItems: "flex-start",
          display: "flex",
          height: "44px",
        }}
      >
        {/* Tabs */}
        <span className="flex-1 h-13 -mt-1">
          <div
            className="flex items-center flex-1 h-full"
            style={{
              alignItems: "center",
              display: "flex",
              flexGrow: "1",
              gap: "normal 24px",
              height: "100%",
            }}
          >
            {tabs.map((tab) => (
              <div
                key={tab.id}
                role="button"
                tabIndex={-1}
                className="flex items-start h-full -mb-1 relative cursor-pointer"
                style={{
                  alignItems: "flex-start",
                  borderRadius: "8px",
                  display: "flex",
                  height: "100%",
                  marginBottom: "-4px",
                  position: "relative",
                }}
                onClick={() => onTabChange(tab.id)}
              >
                <div className="cursor-pointer p-1">
                  <div
                    className={cn(
                      "flex items-start h-11 cursor-pointer select-none",
                      activeTab === tab.id
                        ? "border-b-2 border-foreground"
                        : "text-muted-foreground",
                    )}
                    style={{
                      alignItems: "flex-start",
                      display: "flex",
                      height: "44px",
                      ...(activeTab === tab.id && {
                        borderBottom: "2px solid rgb(211, 205, 221)",
                        borderBottomStyle: "solid",
                        borderBottomWidth: "2px",
                      }),
                    }}
                  >
                    <span
                      className="flex items-center justify-center h-7 w-full"
                      style={{
                        alignItems: "center",
                        display: "flex",
                        height: "28px",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <span
                        className="flex items-center max-w-60 overflow-hidden text-center text-ellipsis whitespace-nowrap"
                        style={{
                          alignItems: "center",
                          maxWidth: "240px",
                          overflow: "hidden",
                          textAlign: "center",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <h2
                          className={cn(
                            "text-center overflow-hidden text-ellipsis whitespace-nowrap max-w-full",
                            activeTab === tab.id
                              ? "text-foreground font-semibold"
                              : "text-muted-foreground",
                          )}
                          style={{
                            fontFamily:
                              '"Inter Display", -apple-system, system-ui, "system-ui", "Segoe UI", Roboto, oxygen-sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                            fontWeight: activeTab === tab.id ? "675" : "400",
                            letterSpacing: "-0.16px",
                            lineHeight: "16.25px",
                            maxWidth: "100%",
                            overflow: "hidden",
                            textAlign: "center",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {tab.label}
                        </h2>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </span>

        {/* Right side controls */}
        <div className="flex items-start gap-2 ml-6">
          {/* Search input field */}
          <div className="border-radius-2 -mb-1 relative">
            <input
              type="text"
              placeholder="keyword"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="px-3 py-1 rounded-lg text-sm outline-none border-0 placeholder-gray-400"
              style={{
                backgroundColor: "rgb(38, 33, 43)",
                borderRadius: "13px",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 20px 40px -10px",
                height: "28px",
                width: "140px", // Approximate width of "Strategy & Planning"
                color: "rgb(255, 255, 255)",
                border: "0",
                outline: "none",
              }}
            />
            <style jsx>{`
              input::placeholder {
                color: rgba(255, 255, 255, 0.4);
              }
            `}</style>
          </div>

          {/* Search button/input */}
          <div className="border-radius-2 -mb-1 relative">
            <div className="cursor-pointer p-1">
              <div
                className={cn(
                  "flex items-center justify-center rounded transition-all duration-300 ease-out",
                  isSearchExpanded ? "w-48" : "w-8",
                )}
                style={{
                  borderRadius: "6px",
                  height: "28px",
                  transitionDuration: "0.3s",
                  transitionProperty: "width",
                  transitionTimingFunction: "ease-out",
                }}
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              >
                <Search className="w-4 h-4 text-foreground" />
                {isSearchExpanded && (
                  <span className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Search skills"
                      value={searchTerm}
                      onChange={(e) => onSearchChange(e.target.value)}
                      className="w-full bg-transparent border-0 outline-none text-white px-2"
                      style={{
                        backgroundColor: "transparent",
                        border: "0",
                        outline: "none",
                        width: "100%",
                        paddingBottom: "4px",
                        paddingTop: "4px",
                      }}
                      autoFocus
                    />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
