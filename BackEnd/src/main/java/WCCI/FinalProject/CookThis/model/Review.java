package WCCI.FinalProject.CookThis.model;

import javax.persistence.*;

@Embeddable
public class Review {

    private String author;

    private String content;

    private double rating;

    public Review(String author, String content, double rating) {
        this.author = author;
        this.content = content;
        this.rating = rating;
    }

    public Review() {
    }


    public String getAuthor() {
        return author;
    }

    public String getContent() {
        return content;
    }

    public double getRating() {
        return rating;
    }



}
