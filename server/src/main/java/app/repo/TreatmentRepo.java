package app.repo;

import java.util.Date;
import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import app.entities.TreatmentProgramsDO;

public interface TreatmentRepo extends CrudRepository<TreatmentProgramsDO, Integer> {

    @Query(value = "select * from treatment_programs where patient_id=?1 order by id desc limit 1",
            nativeQuery = true)
    public TreatmentProgramsDO getTreatment(int patientId);

    @Query(value = "select complete from treatment_programs where patient_id=?1 order by id desc limit 1",
            nativeQuery = true)
    public Boolean getCompleteByPatientId(int patientId);

    @Query(value = "select * from treatment_programs where follow_up = 1 and patient_id=?1",
            nativeQuery = true)
    public List<TreatmentProgramsDO> getFollowTreat(int patientId);

    @Query(value = "select * from treatment_programs where patient_id = ?1 and follow_up = 0 order by id desc limit 1",
            nativeQuery = true)
    public TreatmentProgramsDO getDefaultTreat(int patientId);

    @Query(value = "select distinct follow_up_date from treatment_programs where follow_up = 1 and patient_id = ?1",nativeQuery = true)
    public Set<Date> getFollowDate(int patientId);

    @Query(value = "select * from treatment_programs where follow_up_date =?1 order by id desc limit 1",nativeQuery = true)
    public TreatmentProgramsDO getFollowTreatByDate(String date);

}