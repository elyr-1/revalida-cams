package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Schedule;
import java.util.List;

public interface ScheduleService {

    List<Schedule> getSchedules();
    Schedule getScheduleById(Integer scheduleId);
    Schedule insertSchedule(Schedule schedule);
    Schedule updateSchedule(Integer scheduleId, Schedule schedule);
    void deleteScheduleById(Integer scheduleId);

}
