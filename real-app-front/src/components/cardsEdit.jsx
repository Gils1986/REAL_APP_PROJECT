import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import { useFormik } from "formik";
import Joi from "joi";
import { formikValidateUsingJoi } from "../utils/formikValidateUsingJoi";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cardService from "../services/cardService";
import useCard from "../hooks/useCard";
import { toast } from "react-toastify";

const CardsEdit = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const card = useCard(id);
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    validate: formikValidateUsingJoi({
      bizName: Joi.string().min(2).max(255).required().label("Name"),
      bizDescription: Joi.string()
        .min(2)
        .max(1024)
        .required()
        .label("Description"),
      bizAddress: Joi.string().min(2).max(400).required().label("Address"),
      bizPhone: Joi.string()
        .min(9)
        .max(10)
        .required()
        .regex(/^0[2-9]\d{7,8}$/)
        .label("Phone"),
      bizImage: Joi.string().min(11).max(1024).allow("").label("Image"),
    }),
    async onSubmit(values) {
      try {
        const { bizImage, ...body } = values;
        if (bizImage) {
          body.bizImage = bizImage;
        }
        cardService.updateCard(id, body);
        toast("The card was edit");
        navigate("/my-cards");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  useEffect(() => {
    if (!card) return;

    const { bizAddress, bizDescription, bizImage, bizName, bizPhone } = card;
    form.setValues({
      bizAddress,
      bizDescription,
      bizImage,
      bizName,
      bizPhone,
    });
  }, [card]);

  return (
    <>
      <PageHeader
        title="Edit Card"
        description="Here you can update the current card details"
      />
      <form onSubmit={form.handleSubmit} noValidate>
        <Input
          {...form.getFieldProps("bizName")}
          type="text"
          label="Name"
          required
          error={form.touched.bizName && form.errors.bizName}
        />
        {error && <div className="alert alert-danger">{error}</div>}
        <Input
          {...form.getFieldProps("bizDescription")}
          type="text"
          label="Description"
          required
          error={form.touched.bizDescription && form.errors.bizDescription}
        />
        {error && <div className="alert alert-danger">{error}</div>}
        <Input
          {...form.getFieldProps("bizAddress")}
          type="text"
          label="Address"
          required
          error={form.touched.bizAddress && form.errors.bizAddress}
        />
        {error && <div className="alert alert-danger">{error}</div>}
        <Input
          {...form.getFieldProps("bizPhone")}
          type="text"
          label="Phone"
          required
          error={form.touched.bizPhone && form.errors.bizPhone}
        />

        {error && <div className="alert alert-danger">{error}</div>}

        <Input
          {...form.getFieldProps("bizImage")}
          type="text"
          label="Image"
          error={form.touched.bizImage && form.errors.bizImage}
        />
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="my-2">
          <button
            disabled={!form.isValid}
            type="submit"
            className="btn btn-primary"
          >
            Edit Card
          </button>
        </div>
      </form>
    </>
  );
};

export default CardsEdit;
