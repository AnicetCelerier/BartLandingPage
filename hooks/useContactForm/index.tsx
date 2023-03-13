import { useState, FormEvent, useEffect, useMemo } from "react";

const useContactForm = () => {
  // const [subjectInput, setSubjectInput] = useState<string>("Projet web");
  // const [informationInput, setInformationInput] = useState<string>("");
  const [blockForm, setBlockForm] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>("");
  const [phoneInput, setPhoneInput] = useState<string>("");
  const [employeesInput, setEmployeesInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [companyInput, setCompanyInput] = useState<string>("");
  const [zipCodeInput, setZipCodeInput] = useState<string>("");
  const [customerTypeInput, setCustomerTypeInput] = useState<string>("");
  const showAlert = useMemo(() => {
    return blockForm;
  }, [blockForm]);

  const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (
      emailInput &&
      nameInput &&
      phoneInput &&
      employeesInput &&
      companyInput &&
      zipCodeInput &&
      customerTypeInput
    ) {
      fetch(
        `https://us-central1-sprint-1bda4.cloudfunctions.net/sendMail?email=${emailInput}&subject=${subjectInput}&information=${informationInput}`
      ).then((response) => response.json());
      localStorage.setItem(
        "inputs",
        JSON.stringify({
          emailInput,
          nameInput,
          phoneInput,
          employeesInput,
          companyInput,
          zipCodeInput,
          customerTypeInput,
        })
      );
      setBlockForm(true);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("inputs");
    if (data) {
      const _data = JSON.parse(data);
      setNameInput(_data["nameInput"]);
      setPhoneInput(_data["phoneInput"]);
      setEmployeesInput(_data["employeesInput"]);
      setCompanyInput(_data["conpanyInput"]);
      setZipCodeInput(_data["zipCodeInput"]);
      setEmailInput(_data["emailInput"]);
      setCustomerTypeInput(_data["customerTypeInput"]);
      setBlockForm(true);
    } else {
      setEmailInput("");
      setNameInput("");
      setPhoneInput("");
      setEmployeesInput("");
      setCompanyInput("");
      setZipCodeInput("");
      setCustomerTypeInput("");
    }
  }, []);

  return {
    setEmailInput,
    emailInput,
    setNameInput,
    nameInput,
    setPhoneInput,
    phoneInput,
    setEmployeesInput,
    employeesInput,
    setCompanyInput,
    companyInput,
    setZipCodeInput,
    zipCodeInput,
    setCustomerTypeInput,
    customerTypeInput,
    handleSubmit,
    blockForm,
    showAlert,
  };
};

export default useContactForm;
