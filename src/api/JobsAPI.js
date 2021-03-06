import jobs from "../data/jobs";
import NetworkService from "./NetworkService";
import UserRole from "../enums/UserRole";

export default {
  getJobsMocked: searchQuery =>
    new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            success: true,
            response: {
              data: jobs.filter(job =>
                searchQuery
                  ? job.title
                      .toLowerCase()
                      .indexOf(searchQuery.toLowerCase()) >= 0
                  : true
              )
            }
          }),
        1000
      )
    ),
  getJobsMockedError: () =>
    new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            success: false,
            error:
              "There was an error loading job offesrs. Please try again leater!"
          }),
        1
      )
    ),
  getJobs: async () => {
    return await NetworkService.get("/jobs");
  },
  getJobsToManageMocked: (ownerId, userRole) =>
    new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            success: true,
            response: {
              data: jobs.filter(job => {
                if (userRole === UserRole.ADMIN) {
                  return true;
                }
                return job.createdBy === ownerId;
              })
            }
          }),
        1000
      )
    ),
  getJobMocked: slug =>
    new Promise(resolve => {
      const job = jobs.find(job => job.slug === slug);
      setTimeout(
        () =>
          resolve({
            success: job !== undefined,
            response: { data: job },
            error:
              job === undefined
                ? "The requested job offer does not exist or has expired."
                : undefined
          }),
        1000
      );
    }),
  addJobMocked: () =>
    new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            success: true,
            response: { data: { unid: "a6bddb5a-a6a1-130a-4c1c-1a7ae01baeb1" } }
          }),
        1500
      )
    ),
  addJobMockedError: () =>
    new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            success: false,
            error: "The server is currently busy. Please try again!"
          }),
        1000
      )
    )
};
