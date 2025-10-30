// util simples para extrair data e hora de vários formatos (ex: "2025-10-20 05:25:05")
export const getData = (dataHora) => {
    if (!dataHora) return "";
    const s = String(dataHora);
    // Código do formato original:
    // if (s.includes(" ")) return s.split(" ")[0];
    // if (s.includes("T")) return s.split("T")[0];
    // const parsed = new Date(s);
    // return isNaN(parsed.getTime()) ? "" : parsed.toISOString().split("T")[0];

    // Código para formato BR
    let datePart = "";
    if (s.includes(" ")) {
        datePart = s.split(" ")[0];
    } else if (s.includes("T")) {
        datePart = s.split("T")[0];
    } else {
        const parsed = new Date(s);
        if (isNaN(parsed.getTime())) return "";
        datePart = parsed.toISOString().split("T")[0];
    }

    const parts = datePart.split("-");
    if (parts.length !== 3) return "";
    const [year, month, day] = parts;
    return `${day}/${month}/${year}`;
};

export const getHora = (dataHora) => {
    if (!dataHora) return "";
    const s = String(dataHora);
    if (s.includes(" ")) return s.split(" ")[1]?.slice(0, 8) || "";
    if (s.includes("T")) {
        const time = s.split("T")[1].split("Z")[0].split("+")[0];
        return time.slice(0, 8);
    }
    const parsed = new Date(s);
    return isNaN(parsed.getTime())
        ? ""
        : parsed.toISOString().split("T")[1].slice(0, 8);
};

export default { getData, getHora };
