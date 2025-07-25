export function Header() {
  return (
    <nav
      aria-label="Main"
      className="sticky top-0 z-40 w-full border-b border-border"
      style={{
        backgroundColor: "rgb(38, 33, 43)",
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 20px 40px -10px",
        height: "64px",
        position: "sticky",
        top: "0px",
        transition: "height 0.2s ease-in-out",
        width: "100%",
        zIndex: 40,
      }}
    >
      <div
        className="flex items-center justify-between h-full px-8 relative z-20"
        style={{
          alignItems: "center",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          paddingLeft: "48px",
          paddingRight: "48px",
          position: "relative",
          width: "100%",
          zIndex: 20,
        }}
      >
        {/* Brand */}
        <a
          href="https://full-stack-marketer.super.site/"
          className="flex items-center h-full cursor-pointer text-foreground hover:text-primary transition-colors"
          style={{
            alignItems: "center",
            cursor: "pointer",
            display: "flex",
            flexShrink: 0,
            height: "100%",
            paddingLeft: "16px",
            paddingRight: "16px",
            position: "relative",
            textWrap: "nowrap",
            whiteSpace: "nowrap",
          }}
        >
          <span
            className="text-foreground font-semibold"
            style={{
              cursor: "pointer",
              fontFamily:
                '"Space Grotesk", "Space Grotesk-fallback", Helvetica, "Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", sans-serif',
              fontWeight: "600",
              textWrap: "nowrap",
              whiteSpace: "nowrap",
            }}
          >
            Full Stack Marketer
          </span>
        </a>

        {/* CTA Button */}
        <div
          className="flex items-center h-full"
          style={{
            height: "100%",
            maxHeight: "64px",
            position: "relative",
          }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://lindafairgrieve.com/"
            className="cursor-pointer"
            style={{
              cursor: "pointer",
              paddingRight: "8px",
            }}
          >
            <div
              className="px-4 py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: "#9459d0",
                borderRadius: "50px",
                color: "white",
                cursor: "pointer",
                paddingBottom: "8px",
                paddingLeft: "16px",
                paddingRight: "16px",
                paddingTop: "8px",
                position: "relative",
                textWrap: "nowrap",
                transition: "opacity 0.2s ease-in-out",
                whiteSpace: "nowrap",
              }}
            >
              To my website
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
