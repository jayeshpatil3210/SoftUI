import React from 'react'
import Avatar from '@mui/material/Avatar';
import ava from '../../../img/1.jpg';
import ava2 from '../../../img/2.jpg';
import Stack from '@mui/material/Stack';
import AvatarGroup from '@mui/material/AvatarGroup';


import { Collapse } from 'bootstrap';

const Ltable = () => {
    return (
        <div class="card">
            <div class="table-responsive">
                <table class="table-avatar" style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Companies</th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Budget</th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Members</th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Completion</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="d-flex px-2">
                                    <div>
                                        <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-spotify.svg" class="avatar avatar-sm rounded-circle me-2" />
                                    </div>
                                    <div class="my-auto">
                                        <h6 class="mb-0 text-xs">Spotify</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="text-xs font-weight-bold mb-0">$2,500</p>
                            </td>
                            <td>
                                <span class="badge badge-dot me-4">
                                    <i class="bg-info"></i>
                                    <AvatarGroup total={3}>
                                        <Avatar alt="Remy Sharp" src={ava} />
                                        <Avatar alt="Travis Howard" src={ava2} />
                                        <Avatar alt="Cindy Baker" src={ava} />
                                    </AvatarGroup>

                                </span>
                            </td>
                            <td class="align-middle text-center">
                                <div class="align-items-center">
                                    <span class="me-2 text-xs">60%</span>
                                    <div>
                                        <div class="progress">
                                            <div class="progress-bar bg-info" role="progressbar" aria-valuenow="60" aria-valuemin="20" aria-valuemax="100" style={{ width: 0 }}></div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td class="align-middle">
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div class="d-flex px-2">
                                    <div>
                                        <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-invision.svg" class="avatar avatar-sm rounded-circle me-2" />
                                    </div>
                                    <div class="my-auto">
                                        <h6 class="mb-0 text-xs">Invision</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="text-xs font-weight-bold mb-0">$5,000</p>
                            </td>
                            <td>
                                <span class="badge badge-dot me-4" style={{ alignItems: 'center' }}>
                                    <i class="bg-success"></i>
                                    <AvatarGroup total={2}>
                                        <Avatar alt="Remy Sharp" src={ava} />
                                        <Avatar alt="Travis Howard" src={ava2} />
                                        <Avatar alt="Cindy Baker" src={ava} />
                                    </AvatarGroup>
                                </span>
                            </td>
                            <td class="align-middle text-center">
                                <div class="align-items-center">
                                    <span class="me-2 text-xs">100%</span>
                                    <div>
                                        <div class="progress">
                                            <div class="progress-bar2 bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: 100 }}></div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td class="align-middle">
                                {/* <button class="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                                </button> */}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div class="d-flex px-2">
                                    <div>
                                        <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-jira.svg" class="avatar avatar-sm rounded-circle me-2" />
                                    </div>
                                    <div class="my-auto">
                                        <h6 class="mb-0 text-xs">Jira</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="text-xs font-weight-bold mb-0">$3,400</p>
                            </td>
                            <td>
                                <span class="badge badge-dot me-4">
                                    <i class="bg-danger"></i>
                                    <AvatarGroup total={3}>
                                        <Avatar alt="Remy Sharp" src={ava} />
                                        <Avatar alt="Travis Howard" src={ava2} />
                                        <Avatar alt="Cindy Baker" src={ava} />
                                    </AvatarGroup>
                                </span>
                            </td>
                            <td class="align-middle text-center">
                                <div class=" align-items-center">
                                    <span class="me-2 text-xs">30%</span>
                                    <div>
                                        <div class="progress">
                                            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="30" style={{ width: 30 }}></div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td class="align-middle">
                                {/* <button class="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                                </button> */}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div class="d-flex px-2">
                                    <div>
                                        <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-slack.svg" class="avatar avatar-sm rounded-circle me-2" />
                                    </div>
                                    <div class="my-auto">
                                        <h6 class="mb-0 text-xs">Slack</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="text-xs font-weight-bold mb-0">$1,000</p>
                            </td>
                            <td>
                                <span class="badge badge-dot me-4">
                                    <i class="bg-danger"></i>
                                    <AvatarGroup total={2}>
                                        <Avatar alt="Remy Sharp" src={ava} />
                                        <Avatar alt="Travis Howard" src={ava2} />
                                        <Avatar alt="Cindy Baker" src={ava} />
                                    </AvatarGroup>
                                </span>
                            </td>
                            <td class="align-middle text-center">
                                <div class="align-items-center">
                                    <span class="me-2 text-xs">0%</span>
                                    <div>
                                        <div class="progress">
                                            <div class="progress-bar0 bg-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0" style={{ width: 0 }}></div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td class="align-middle">
                                {/* <button class="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                                </button> */}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div class="d-flex px-2">
                                    <div>
                                        <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-webdev.svg" class="avatar avatar-sm rounded-circle me-2" />
                                    </div>
                                    <div class="my-auto">
                                        <h6 class="mb-0 text-xs">Webdev</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="text-xs font-weight-bold mb-0">$14,000</p>
                            </td>
                            <td>
                                <span class="badge badge-dot me-4">
                                    <i class="bg-info"></i>
                                    <AvatarGroup total={3}>
                                        <Avatar alt="Remy Sharp" src={ava} />
                                        <Avatar alt="Travis Howard" src={ava2} />
                                        <Avatar alt="Cindy Baker" src={ava} />
                                    </AvatarGroup>
                                </span>
                            </td>
                            <td class="align-middle text-center">
                                <div class="align-items-center">
                                    <span class="me-2 text-xs">80%</span>
                                    <div>
                                        <div class="progress">
                                            <div class="progress-bar bg-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="80" style={{ width: 80 }}></div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td class="align-middle">
                                {/* <button class="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                                </button> */}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div class="d-flex px-2">
                                    <div>
                                        <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-xd.svg" class="avatar avatar-sm rounded-circle me-2" />
                                    </div>
                                    <div class="my-auto">
                                        <h6 class="mb-0 text-xs">Adobe XD</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="text-xs font-weight-bold mb-0">$2,300</p>
                            </td>
                            <td>
                                <span class="badge badge-dot me-4">
                                    <i class="bg-success"></i>
                                    <AvatarGroup total={2}>
                                        <Avatar alt="Remy Sharp" src={ava} />
                                        <Avatar alt="Travis Howard" src={ava2} />
                                        <Avatar alt="Cindy Baker" src={ava} />
                                    </AvatarGroup>
                                </span>
                            </td>
                            <td class="align-middle text-center">
                                <div class="align-items-center">
                                    <span class="me-2 text-xs">100%</span>
                                    <div>
                                        <div class="progress">
                                            <div class="progress-bar2 bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: 100 }}></div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td class="align-middle">
                                {/* <button class="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                                </button> */}
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Ltable