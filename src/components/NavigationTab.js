import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function NavigationTab({ icon, selected, name, link }) {
  return (
    <Link href={link} underline="none">
      <Button
        className={`nav-btn ${selected ? "active" : ""}`}
        startIcon={icon}
        variant={selected ? "contained" : ""}
        sx={{
          display: "flex",
          justifyContent: "start",
          color: "#a9afbb",
          backgroundColor: "transparent",
          mt: 1,
          pl: 3,
          pt: "12px",
          pb: "12px",
        }}
        size="large"
        fullWidth
      >
        <span className="mobile-hide">{name}</span>
      </Button>
    </Link>
  );
}