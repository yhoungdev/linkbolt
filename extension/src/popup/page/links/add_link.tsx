import DashboardLayout from "../../../layout/dashboardLayout";
import Input from "../../components/atoms/inputs/input";
import Button from "../../components/atoms/button";
import { postData } from "../../../utils/request";
import { useFormik } from "formik";
import { add_links_validations } from "../../../validations";
import { goTo } from "react-chrome-extension-router";
import MyLinks from "../myLinks";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";

const Add_new_link = () => {
  const [loader, setLoader] = useState(false);
  const payloads = {
    name: "",
    url: "",
  };

  const { isAuthenticated } = useAuth();

  const handlePost = async (value: any) => {
    setLoader(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore

    const payload = {
      ...value,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const { response } = await postData({
      url: "/user/save_link",
      body: payload,
      params: isAuthenticated,
    });

    if (response?.status === 200) {
      setTimeout(() => goTo(MyLinks), 1500);
    } else {
      setLoader(false);
    }
  };

  const formik = useFormik({
    initialValues: payloads,
    validateOnChange: true,
    validationSchema: add_links_validations,
    onSubmit: handlePost,
  });

  return (
    <DashboardLayout>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <Input
            type={"text"}
            label="Url Name"
            placeholder="linkedin"
            name="name"
            onChange={formik.handleChange}
            error={formik.errors.name}
          />

          <Input
            type={"text"}
            label="Url"
            placeholder="https://www.google.com"
            name="url"
            onChange={formik.handleChange}
            error={formik.errors.url}
          />

          <Button type="submit" loading={loader}>
            Add Link
          </Button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Add_new_link;
