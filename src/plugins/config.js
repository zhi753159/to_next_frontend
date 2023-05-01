import { amber, blue, red, blueGrey, grey } from "@mui/material/colors";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  dateFormat: "YYYY-MM-DD",
  timeFormat: "HH:mm",
  dateTimeFormat: "YYYY-MM-DD HH:mm",
  dateTimeMask: "____-__-__ __:__",
  errorToast: {
    backgroundColor: "#F44336",
    color: "#ffffff",
  },
  successToast: {
    backgroundColor: "#4CAF50",
    color: "#ffffff",
  },

  getPublic: (path) => {
    return window.location.origin + path;
  },

  style: {
    retryButton: { mr: 1, color: amber[500], "&:hover": { color: amber[600] } },
    editButton: { mr: 1, color: "#aa2424", "&:hover": { color: "#bc4747" }  },
    delButton: { color: red[500], "&:hover": { color: red[600] } },
    addButton: { position: "absolute", bottom: 16, right: 16, backgroundColor: "#aa2424 !important" },
    content: {
      wrap: { p: "0!important", minWidth: "50vw" },
      iconBox: { width: "90px", height: "90px", background: "linear-gradient(60deg,#bc4747,#aa2424)", position: "absolute" },
      header: {
        wrap: { display: "flex", alignItems: "flex-end", p: 2.5, position: "relative" },
        icon: { color: blueGrey[600], mr: 1 },
        title: {
          fontWeight: 700,
          color: "#3c4858",
          textDecoration: "none",
          lineHeight: 1.6,
          textAlign: "end",
          width: "100%",
        },
        addButton: { position: "absolute", right: 15, top: 15 },
        addIcon: { color: "white", transform: "scale(1.8)" },
      },
    },
    form: {
      card: { mt: 5, ml: 4, mr: 4, mb: 2, boxShadow: 0, overflow: "visible" },
      container: { mb: 3, p: 5, pb: 2, pt: 2 },
      appBar: {
        wrap: { display: "flex", alignItems: "flex-end", p: 2.5, position: "relative" },
        icon: { color: blueGrey[600], mr: 1 },
        title: {
          fontWeight: 700,
          color: "#8090a3",
          textDecoration: "none",
          lineHeight: 1.6,
          closeButton: { position: "absolute", right: 2, top: 5 },
        },
        button:{ position: "absolute", right: 2, top: 5 },
      },
      input: {
        wrap: { display: "flex", alignItems: "flex-end" },
        icon: { color: blueGrey[600], mr: 1, mb: 0.5 },
      },
      saveButton: { background: "linear-gradient(60deg,#bc4747,#aa2424)", "&:hover": { backgroundColor: "#02a6de" }, borderRadius: 3 },
      saveTittle: { fontWeight: 700 },
    },
    list: {
      appBar: {
        wrap: { position: "fixed" },
        toolBar: { pr: "0 !important" },
        info: {
          wrap: { display: "flex", justifyContent: "center", width: "100%" },
          icon: { color: blue[900], mr: 1 },
          title: {
            fontWeight: 700,
            fontSize: 23,
            color: blue[900],
            lineHeight: 1.6,
          },
          text: {
            fontWeight: 500,
            fontSize: 20,
            ml: 2,
            color: grey[900],
            lineHeight: 1.8,
          },
        },
        closeButton: { mr: 2 },
        closeIcon: { transform: "scale(1.5)" },
      },
    },
  },
};
  