import { useAddRssFeed } from "../api/hooks";
import { useRefreshArticles } from "@/entities/Article";
import { useState } from "react";
import styles from "./FeedControls.module.css";
import Input from "@/shared/UI/Input";
import Button from "@/shared/UI/Button";

const AddRssURL = () => {
  const { mutate: refresh } = useRefreshArticles();
  const [rssForm, setRssForm] = useState({
    url: "",
    title: ""
  });
  const { mutate: addFeed } = useAddRssFeed();

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setRssForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    addFeed({
      url: rssForm.url,
      title: rssForm.title
    });
  };

  return (
    <form className={styles.feedForm} onSubmit={handleSubmit}>
      <Button text={"Refresh the feed"} type={"button"} onClick={refresh} />
      <p className={styles.addFeedTitle}>Add feed</p>
      <Input
        placeholder={"Enter rss url"}
        type={"text"}
        name="url"
        onChange={handleChangeInput}
      />
      <Input
        placeholder={"Enter url name"}
        type={"text"}
        name="title"
        onChange={handleChangeInput}
      />
      <Button text={"Add"} type={"submit"} />
    </form>
  );
};

export default AddRssURL;
