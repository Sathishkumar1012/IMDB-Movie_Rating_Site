package com.sathish.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/root/reviews")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Review> UpdateReview(@RequestBody Map<String,String> payload) {
        return new ResponseEntity<Review>(reviewService.SetReview(payload.get("content"),
                payload.get("imdbId")), HttpStatus.CREATED);
    }
}
