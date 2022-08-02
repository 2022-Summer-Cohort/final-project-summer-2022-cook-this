package WCCI.FinalProject.CookThis.model;

import javax.persistence.Embeddable;
import java.util.Objects;

@Embeddable
public class Ingredient {
    private String title;

    private String imgUrl;

    private String description;


    public Ingredient(String title, String imgUrl, String description) {
        this.title = title;
        this.imgUrl = imgUrl;
        this.description = description;
    }

    public Ingredient() {
    }

    public String getTitle() {
        return title;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public String getDescription() {
        return description;
    }

}
