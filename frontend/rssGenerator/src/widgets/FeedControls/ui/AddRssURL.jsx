import { useAddRssFeed } from "@/entities/api/feed/hooks";
import { useState } from "react";
import styles from "./FeedControls.module.css";
import Input from "@/shared/UI/Input";
import Button from "@/shared/UI/Button";
import { useRefreshArticles } from "@/entities/api";

const AddRssURL = () => {
  const { mutate: refresh } = useRefreshArticles();
  const [rssForm, setRssForm] = useState({
    url: "",
    title: ""
  });
  const { mutate } = useAddRssFeed();

  const handleChangeInput = e => {
    const key = e.target.name;
    const newValue = e.target.value;
    setRssForm(prev => ({
      ...prev,
      [key]: newValue
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    return mutate({
      url: rssForm.url,
      title: rssForm.title
    });
  };

  return (
    <form className={styles.feedForm} onSubmit={handleSubmit}>
      <Button text={"Refresh the feed"} type={"button"} onClick={mutate} />
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
