package com.sathish.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import static org.apache.tomcat.jni.SSLConf.apply;
import static org.springframework.data.mongodb.core.query.UntypedExampleMatcher.matching;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository ReviewRepo;
    @Autowired
    private MongoTemplate template;

    public Review SetReview(String content, String imdbId) {

        Review review = ReviewRepo.insert(new Review(content));

        template.update(Movie.class)
            .matching(Criteria.where("imdbId").is(imdbId))
            .apply(new Update().push("reviewIds").value(content))
                .first();

        return review;

    }
}
