package app.entities;

import javax.persistence.*;
import java.util.List;

/**
 * Created by 52400 on 2017/6/21.
 */
@Table(name = "hospital")
@Entity
public class HospitalDO {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String hospitalName;//医院名字

    @OneToMany(mappedBy = "hospital")
    private List<UserDO> userList;//一个医院对应多个用户

    @ManyToMany
    @JoinTable(
            name = "project_hospital",
            joinColumns = {@JoinColumn(name = "hospital_id")},
            inverseJoinColumns = {@JoinColumn(name = "project_id")})
    private List<ProjectDO> projectList;//多个项目对应多个医院

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHospitalName() {
        return hospitalName;
    }

    public void setHospitalName(String hospitalName) {
        this.hospitalName = hospitalName;
    }

    public List<UserDO> getUserList() {
        return userList;
    }

    public void setUserList(List<UserDO> userList) {
        this.userList = userList;
    }

    public List<ProjectDO> getProjectList() {
        return projectList;
    }

    public void setProjectList(List<ProjectDO> projectList) {
        this.projectList = projectList;
    }
}