package WCCI.FinalProject.CookThis.model;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;

@Embeddable
public class Review {

    private String author;
    @Lob
    private String content;

    private Double ratings;

    public Review(String author, String content, Double ratings) {
        this.author = author;
        this.content = content;
        this.ratings = ratings;
    }

    public Review() {
    }


    public String getAuthor() {
        return author;
    }

    public String getContent() {
        return content;
    }

    public Double getRatings() {
        return ratings;
    }





}
