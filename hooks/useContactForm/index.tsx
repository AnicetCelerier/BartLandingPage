import React, { useState, FormEvent, useEffect, useMemo } from "react";
import { Customer } from "@/types";
import { DemandeOuvertureModel } from "@/models/DemandeOuvertureModel";
import { z, ZodType } from "zod";

const useContactForm = () => {
  const [blockForm, setBlockForm] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>("");
  const [phoneInput, setPhoneInput] = useState<string>("");
  const [employeesInput, setEmployeesInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [companyInput, setCompanyInput] = useState<string>("");
  const [zipCodeInput, setZipCodeInput] = useState<string>("");
  const [customerTypeInput, setCustomerTypeInput] = useState<Customer>("null");
  const [customerTypeInputStyle, setCustomerTypeInputStyle] =
    useState<string>("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const showAlert = useMemo(() => {
    setCustomerTypeInputStyle("deactivate");
    return blockForm;
  }, [blockForm]);

  const FormSchema: ZodType<DemandeOuvertureModel> = z.object({
    nom: z
      .string({
        required_error: "Un nom valide est requis",
        invalid_type_error: "Un nom valide est requis",
      })
      .min(2, "Un nom valide est requis"),
    telephone: z
      .string({
        required_error: "Un numéro de téléphone valide est requis",
        invalid_type_error: "Un numéro de téléphone valide est requis",
      })
      .min(10, "Un numéro de téléphone valide est requis")
      .trim(),
    nbEmployes: z.number({
      required_error: "Un nombre d'employés valide est requis",
      invalid_type_error: "Un nombre d'employés valide est requis",
    }),
    email: z
      .string({
        required_error: "Un email valide est requis",
        invalid_type_error: "Un email valide est requis",
      })
      .email("Un email valide est requis"),
    entreprise: z
      .string({
        required_error: "Un nom d'entreprise valide est requis",
        invalid_type_error: "Un nom d'entreprise valide est requis",
      })
      .min(1, "Un nom d'entreprise valide est requis"),
    codePostal: z
      .string({
        required_error: "Un code postal valide est requis",
        invalid_type_error: "Un code postal valide est requis",
      })
      .min(5, "Un code postal valide est requis")
      .max(10, "Un code postal valide est requis")
      .trim(),
    type: z.enum(["Responsable de la vie de bureau", "Employé"], {
      errorMap: (issue, _ctx) => {
        switch (issue.code) {
          case "invalid_type":
            return {
              message: "Veuillez sélectionner une des deux options ci-dessus",
            };
          case "invalid_enum_value":
            return {
              message: "Veuillez sélectionner une des deux options ci-dessus",
            };
          default:
            return {
              message: "Veuillez sélectionner une des deux options ci-dessus",
            };
        }
      },
    }),
  });

  const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setFormErrors({});
    const body: DemandeOuvertureModel = {
      type: customerTypeInput,
      nom: nameInput,
      entreprise: companyInput,
      codePostal: zipCodeInput,
      email: emailInput,
      telephone: phoneInput,
      nbEmployes: Number(employeesInput),
    };
    const parsedForm = FormSchema.safeParse(body);

    if (!parsedForm.success) {
      const error = parsedForm.error;
      let newErrors = {};
      for (const issue of error.issues) {
        newErrors = {
          ...newErrors,
          [issue.path[0]]: issue.message,
        };
      }
      return setFormErrors(newErrors);
    } else {
      fetch(
        "https://bartcantineapi.herokuapp.com/emails/send_demande_ouverture_email",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
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
    formErrors,
  };
};

export default useContactForm;
