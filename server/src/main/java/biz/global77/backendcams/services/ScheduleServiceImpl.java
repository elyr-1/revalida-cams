package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Schedule;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import static com.tej.JooQDemo.jooq.sample.model.Tables.*;

/* CRUD functions for subject detail history */
@Service
public class ScheduleServiceImpl implements ScheduleService {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add subject detail */
    @Override
    public Schedule insertSchedule(Schedule schedule) {
        dsl.insertInto(SCHEDULE,
                SCHEDULE.ACADEMIC_YEAR,
                SCHEDULE.SEM,
                SCHEDULE.SCHEDULE_FROM,
                SCHEDULE.SCHEDULE_TO,
                SCHEDULE.DAY,
                SCHEDULE.SECTION_ID,
                SCHEDULE.YEARLEVEL,
                SCHEDULE.STATUS,
                SCHEDULE.PROFESSOR_ID,
                SCHEDULE.SUBJECT_ID)
        .values(
                schedule.getAcademicYear(),
                schedule.getSem(),
                schedule.getScheduleFrom(),
                schedule.getScheduleTo(),
                schedule.getDay(),
                schedule.getSectionId(),
                schedule.getYearlevel(),
                schedule.getStatus(),
                schedule.getProfessorId(),
                schedule.getSubjectId())
        .execute();
        return schedule;
    }

    /* get all subject details history */
    @Override
    public List<Schedule> getSchedules() {
        return dsl.select(
                SCHEDULE.SCHEDULE_ID,
                SCHEDULE.ACADEMIC_YEAR,
                SCHEDULE.SEM,
                SCHEDULE.YEARLEVEL,
                SCHEDULE.SCHEDULE_FROM,
                SCHEDULE.SCHEDULE_TO,
                SCHEDULE.DAY,
                SCHEDULE.STATUS,
                SCHEDULE.SECTION_ID,
                SCHEDULE.PROFESSOR_ID,
                SCHEDULE.SUBJECT_ID,
                SECTION.SECTION_NO.as("sectionNo"),
                PROFESSOR.PROFESSOR_NO.as("professorNo"),
                SUBJECT.SUBJECT_CODE.as("subjectCode"))
                .from(SCHEDULE)
                .innerJoin(SECTION).on(SCHEDULE.SECTION_ID.eq(SECTION.SECTION_ID))
                .innerJoin(PROFESSOR).on(SCHEDULE.PROFESSOR_ID.eq(PROFESSOR.PROFESSOR_ID))
                .innerJoin(SUBJECT).on(SCHEDULE.SUBJECT_ID.eq(SUBJECT.SUBJECT_ID))
                .orderBy(SCHEDULE.SCHEDULE_ID)
                .fetchInto(Schedule.class);
    }

    /* get subject detail by ID */
    @Override
    public Schedule getScheduleById(Integer scheduleId) {
        return dsl.selectFrom(SCHEDULE)
                .where(SCHEDULE.SCHEDULE_ID.eq(scheduleId))
                .fetchOneInto(Schedule.class);
    }

    /* update subject detail */
    @Override
    public Schedule updateSchedule(Integer scheduleId, Schedule schedule) {
        dsl.update(SCHEDULE)
                .set(SCHEDULE.ACADEMIC_YEAR, schedule.getAcademicYear())
                .set(SCHEDULE.SEM, schedule.getSem())
                .set(SCHEDULE.SCHEDULE_FROM, schedule.getScheduleFrom())
                .set(SCHEDULE.SCHEDULE_TO, schedule.getScheduleTo())
                .set(SCHEDULE.DAY, schedule.getDay())
                .set(SCHEDULE.SECTION_ID, schedule.getSectionId())
                .set(SCHEDULE.YEARLEVEL, schedule.getYearlevel())
                .set(SCHEDULE.STATUS, schedule.getStatus())
                .set(SCHEDULE.PROFESSOR_ID, schedule.getProfessorId())
                .set(SCHEDULE.SUBJECT_ID, schedule.getSubjectId())
                .where(SCHEDULE.SCHEDULE_ID.eq(scheduleId))
                .execute();
        return schedule;
    }

    /* delete subject detail */
    @Override
    public void deleteScheduleById(Integer scheduleId) {
        dsl.deleteFrom(SCHEDULE)
                .where(SCHEDULE.SCHEDULE_ID.eq(scheduleId))
                .execute();
    }

}
