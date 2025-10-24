import { useGetRssFeed, useAddRssFeed } from "@/shared/api/feed/hooks";
import styles from "./Feed.module.css";
import { useState } from "react";
import Input from "@/shared/UI/Input";
import Button from "@/shared/UI/Button";

const Feed = () => {
  const [rssForm, setRssForm] = useState({
    url: "",
    title: ""
  });
  const { mutate } = useAddRssFeed();

  const { data } = useGetRssFeed();

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
    <div className={styles.feed}>
      <form className={styles.feedForm} onSubmit={handleSubmit}>
        <Input
          placeholder={"Введите rss ссылку"}
          type={"text"}
          name="url"
          onChange={handleChangeInput}
        />
        <Input
          placeholder={"Введите название"}
          type={"text"}
          name="title"
          onChange={handleChangeInput}
        />
        <Button text={"Отправить"} />
      </form>
      {data &&
        data.map(el => (
          <div key={el.id} className={styles.feedNews}>
            {el.user_id}
            {el.url}
            {el.normalized_url}
            {el.is_active}
            {el.id}
            {el.title}
          </div>
        ))}
    </div>
  );
};

export default Feed;
