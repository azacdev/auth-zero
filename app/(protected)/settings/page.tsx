import { auth } from "@/auth";
import { redirect } from "next/navigation";

const SettingsPage = () => {
  const session = auth();

  if (!session) {
    redirect("/auth/login");
  }
  return <div>{JSON.stringify(session)}</div>;
};

export default SettingsPage;
