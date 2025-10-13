export interface CompanyData {
  company: string;
  role: string;
  website: string;
  department: string;
  status: string;
  date: string;
  uuid: string;
}

type FilterBlockProps = {
  data: CompanyData[];
  setData: React.Dispatch<React.SetStateAction<CompanyData[]>>;
};

export function FilterBlock({setData }: FilterBlockProps) {
  const addNewRequest = () => {
    const newRequest: CompanyData = {
      company: "Bauch, Hirthe and Jones",
      role: "Administrator",
      website: "https://earnest-ballpark.info",
      department: "Internal",
      status: "rejected",
      date: new Date().toString(),
      uuid: crypto.randomUUID(),
    };

    // Добавляем в конец массива
    setData((prev) => [...prev, newRequest]);
  };

  return (
    <div className="filter-container">
      <div></div>
      <div onClick={addNewRequest}>Add new</div>
    </div>
  );
}
