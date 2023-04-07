import React, {useState, FormEvent, useEffect, useMemo} from "react";
import {Customer} from "@/types";
import {DemandeOuvertureModel} from "@/models/DemandeOuvertureModel";

const useContactForm = () => {
    const [blockForm, setBlockForm] = useState<boolean>(false);
    const [nameInput, setNameInput] = useState<string>("");
    const [phoneInput, setPhoneInput] = useState<string>("");
    const [employeesInput, setEmployeesInput] = useState<string>("");
    const [emailInput, setEmailInput] = useState<string>("");
    const [companyInput, setCompanyInput] = useState<string>("");
    const [zipCodeInput, setZipCodeInput] = useState<string>("");
    const [customerTypeInput, setCustomerTypeInput] = useState<Customer>("null");
    const [customerTypeInputStyle, setCustomerTypeInputStyle] = useState("");

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
            const body: DemandeOuvertureModel = {
                type: customerTypeInput,
                nom: nameInput,
                entreprise: companyInput,
                codePostal: zipCodeInput,
                email: emailInput,
                telephone: phoneInput,
                nbEmployes: employeesInput,
            }
            fetch(
                "https://bartcantineapi.herokuapp.com/emails/send_demande_ouverture_email",
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                }
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
        if (customerTypeInput === "Responsable de la vie de bureau") {
            setCustomerTypeInputStyle("active1");
        }
        if (customerTypeInput === "Employé") {
            setCustomerTypeInputStyle("active2");
        }
    }, [customerTypeInput]);

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
            setCustomerTypeInput("null");
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
        setCustomerTypeInputStyle,
        customerTypeInputStyle,
    };
};

export default useContactForm;
