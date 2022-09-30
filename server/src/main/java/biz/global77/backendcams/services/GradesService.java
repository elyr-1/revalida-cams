package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.Tables;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Grades;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GradesService {

    @Autowired
    private DSLContext dsl;

    /* add grade */

    /* get all grades */
    public List<Grades> getGrades() {
        return dsl.selectFrom(Tables.GRADES).fetchInto(Grades.class);
    }

    /* get grade by ID */

}
