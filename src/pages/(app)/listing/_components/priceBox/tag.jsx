export const Tag = ({ label }) => {
  return (
    <p
      style={{
        textTransform: "uppercase",
        padding: "0.25rem",
        backgroundColor: "var(--foreground-transparent)",
        borderRadius: "0.25rem",
      }}
    >
      {label}
    </p>
  );
};

export const TagBox = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      {children}
    </div>
  );
};
