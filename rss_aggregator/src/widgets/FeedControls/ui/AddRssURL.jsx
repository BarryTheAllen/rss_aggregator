import { useAddRssFeed } from "../api/hooks";
import { useRefreshArticles } from "@/entities/Article";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { IoReloadOutline } from "react-icons/io5";
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
    setRssForm({ url: "", title: "" });
  };

  return (
    <form className={styles.feedForm} onSubmit={handleSubmit}>
      <button type="button" onClick={refresh} className={styles.refreshBtn}>
        <IoReloadOutline className={styles.refreshIcon} /> refresh the feed
      </button>
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
      <button type="submit" className={styles.addRssBtn}>
        <GoPlus className={styles.plusIcon} /> add rss
      </button>
    </form>
  );
};

export default AddRssURL;
