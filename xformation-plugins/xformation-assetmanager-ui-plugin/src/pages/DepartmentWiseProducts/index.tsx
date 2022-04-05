import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { images } from '../../img';
import { PLUGIN_BASE_URL } from '../../constants';
// import { SelectCloudFilter } from '../../components/SelectCloudFilter';
import { DepartmentWiseProduct } from './../../components/DepartmentWiseProduct';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { hide } from '@popperjs/core';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
export class DepartmentWiseProducts extends React.Component<any, any> {
  breadCrumbs: any;
  constructor(props: any) {
    super(props);
    this.state = {
      showRecentFilter: false,
      showAddNewFilter: false,
      product: [
        {
          title: 'Human Resources',
          productList: [
            {
              title: 'EMS',
              isOpen: false,
              services: [
                {
                  stage: 'Production',
                  isOpen: true,
                  mainservices: [
                    {
                      title: 'Fire Wall',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Load Balancer',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Gateway Services',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Business Services',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  stage: 'Testing',
                  isOpen: false,
                  mainservices: [
                    {
                      title: 'Fire Wall',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Load Balancer',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Business 1 Services',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Gateway 2 Services',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  stage: 'Stage',
                  isOpen: false,
                  mainservices: [
                    {
                      title: 'Fire Wall',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Load Balancer',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Business Services',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Gateway Services',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  stage: 'Devlopment',
                  isOpen: false,
                  mainservices: [
                    {
                      title: 'Fire Wall',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Load Balancer',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Business Services',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Gateway Services',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              title: 'Procurement',
              isOpen: false,
              services: [
                {
                  stage: 'Production',
                  isOpen: true,
                  mainservices: [
                    {
                      title: 'Fire Wall',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Load Balancer',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Business Services',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Gateway Services',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  stage: 'Testing',
                  isOpen: false,
                  mainservices: [
                    {
                      title: 'Fire Wall',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Load Balancer',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Business Services',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Gateway Services',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: 'IT infra',
          productList: [
            {
              title: 'EMS',
              services: [
                {
                  stage: 'Production',
                  isOpen: true,
                  mainservices: [
                    {
                      title: 'Fire Wall',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Load Balancer',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Business Services',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Gateway Services',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  stage: 'Testing',
                  mainservices: [
                    {
                      title: 'Fire Wall',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Load Balancer',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Business Services',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Gateway Services',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              title: 'Procurement',
              services: [
                {
                  stage: 'Production',
                  isOpen: true,
                  mainservices: [
                    {
                      title: 'Fire Wall',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Load Balancer',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Business Services',
                      menuOpen: false,
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Gateway Services',
                      menuOpen: false,
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  stage: 'Testing',
                  mainservices: [
                    {
                      title: 'Fire Wall',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Load Balancer',
                      menuOpen: false,
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              title: 'App services',
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Business Services',
                      menuOpen: false,
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Gateway Services',
                      menuOpen: false,
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              title: 'App services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'List & Act',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Admission',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                            {
                              title: 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  title: 'Postgre SQL',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                                {
                                  title: 'Elastic Search',
                                  performance: '70',
                                  availibility: '50',
                                  security: '30',
                                  'data protection': 70,
                                  'user exp': 80,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      departmentList: [
        {
          name: 'Human Resources',
          noOfProduct: 150,
          prodBilling: 10,
          otherBilling: 25,
          productionRatio: 45
        },
        {
          name: 'It Infra',
          noOfProduct: 150,
          prodBilling: 10,
          otherBilling: 50,
          productionRatio: 20
        },
        {
          name: 'IT Devlopment',
          noOfProduct: 150,
          prodBilling: 70,
          otherBilling: 30,
          productionRatio: 45
        },
        {
          name: 'Finance',
          noOfProduct: 150,
          prodBilling: 20,
          otherBilling: 80,
          productionRatio: 15
        },
        {
          name: 'Finance',
          noOfProduct: 150,
          prodBilling: 35,
          otherBilling: 50,
          productionRatio: 85
        },
        {
          name: 'It Infra',
          noOfProduct: 150,
          prodBilling: 20,
          otherBilling: 40,
          productionRatio: 50
        },
      ],
      graphData: {
        pieData: {
          labels: ['Procurement', 'Human Resource', 'Supply chain', 'EMS'],
          datasets: [
            {
              data: [40, 60],
              backgroundColor: [
                'rgb(255, 153, 0)',
                'rgba(112, 222, 174, 1)',
              ]
            }
          ],
        },
        doughnutData: {
          labels: ['Procurement', 'Human Resource', 'Supply chain', 'EMS'],
          datasets: [
            {
              data: [29, 11, 20, 40],
              backgroundColor: [
                'rgba(255, 74, 85, 1)',
                'rgba(113, 167, 254, 1)',
                'rgba(253, 191, 98, 1)',
                'rgba(112, 222, 174, 1)',
                '',
              ]
            }

          ],

        }
      }

    };
    this.breadCrumbs = [
      {
        label: 'Home',
        route: `/`,
      },
      {
        label: 'Assets | Environments',
        isCurrentPage: true,
      },
    ];
  }

  openProduct = (i: any, j: any) => {
    const { product } = this.state;
    for (let m = 0; m < product[i].productList.length; m++) {
      if (j !== m) {
        product[i].productList[m].isOpen = false;
      }
    }
    product[i].productList[j].isOpen = !product[i].productList[j].isOpen;
    this.setState({
      product,
    });
  };

  openServiceOfProduct = (i: any, j: any, k: any) => {
    const { product } = this.state;
    for (let m = 0; m < product[i].productList[j].services.length; m++) {
      if (k !== m) {
        product[i].productList[j].services[m].isOpen = false;
      }
    }
    product[i].productList[j].services[k].isOpen = !product[i].productList[j].services[k].isOpen;
    this.setState({
      product,
    });
  };

  openProductMainServices = (i: any, j: any, k: any, l: any) => {
    const { product } = this.state;
    for (let m = 0; m < product[i].productList[j].services[k].mainservices.length; m++) {
      if (l !== m) {
        product[i].productList[j].services[k].mainservices[m].isOpen = false;
      }
    }
    product[i].productList[j].services[k].mainservices[l].isOpen = !product[i].productList[j].services[k].mainservices[
      l
    ].isOpen;
    this.setState({
      product,
    });
  };

  openServices = (i: any, j: any, k: any, l: any, m: any) => {
    const { product } = this.state;
    for (let n = 0; n < product[i].productList[j].services[k].mainservices.length; n++) {
      if (l !== n) {
        product[i].productList[j].services[k].mainservices[m].services[n].isOpen = false;
      }
    }
    product[i].productList[j].services[k].mainservices[l].services[m].isOpen = !product[i].productList[j].services[k]
      .mainservices[l].services[m].isOpen;
    this.setState({
      product,
    });
  };

  render() {
    const { departmentList, graphData } = this.state;
    return (
      <div className="asset-container">
        <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ASSET MANAGEMENT" />
        <div className="department-wise-container">
          <div className="common-container">
            {graphData && <div className="common-container">
              <div className="row">
                <div className="col-lg-9 col-md-8 col-sm-6">
                  <div className="asset-heading">Cost Analysis</div>
                </div>
                <div className="col-lg-4 col-md-2 col-sm-1">
                  <div className="asset-heading">Product wise Cost</div>
                  <div style={{ width: "300px", height: "300px" }}>
                    {graphData.doughnutData && <Doughnut data={graphData.doughnutData} />}
                  </div>
                  <div> <Link to={`${PLUGIN_BASE_URL}/department-wise-charts`} className="heading" >View details</Link></div>
                </div>
                <div className="col-lg-4 col-md-2 col-sm-1">
                  <div className="asset-heading">Production Vs Others</div>
                  <div style={{ width: "300px", height: "300px" }}>
                    {graphData.pieData && <Pie data={graphData.pieData} />}
                  </div>
                  <div> <Link to={`${PLUGIN_BASE_URL}/department-wise-charts`} className="heading" >View details</Link></div>
                </div>
                <div className="col-lg-4 col-md-2 col-sm-1">
                  <div className="asset-heading">Product wise Cost</div>
                  {graphData.doughnutData && <div >
                    <div style={{ width: "300px", height: "300px" }}> <Doughnut data={graphData.doughnutData} /></div>
                    <div>
                    </div>
                    <div> <Link to={`${PLUGIN_BASE_URL}/department-wise-charts`} className="heading" >View details</Link></div>
                  </div>
                  }
                </div>

              </div>
            </div>}
            <div className="row">
              <div className="col-lg-9 col-md-8 col-sm-6">
                <div className="asset-heading">Department wise</div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="float-right common-right-btn">
                  <Link to={`${PLUGIN_BASE_URL}/environments`} className="asset-white-button min-width-inherit">
                    <img src={images.Jobs} alt="" style={{ maxWidth: '20px' }} />
                  </Link>
                  {/* <Link to={`${PLUGIN_BASE_URL}/environments`} className="asset-white-button min-width-inherit">
                    <i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp; Back
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="department-wise-boxs">
              <div className="department-wise-inner">
                {departmentList &&
                  departmentList.length > 0 &&
                  departmentList.map((val: any, index: any) => {
                    return (
                      <div className="department-box">
                        <Link to={`${PLUGIN_BASE_URL}/department-wise-charts`} className="heading" >{val.name}</Link>
                        <div className="contents">
                          <ul>
                            <li>
                              <label>No. of Products</label>
                              <span>{val.noOfProduct}</span>
                            </li>
                            <li>
                              <label>Prod Billing</label>
                              <span>{val.prodBilling}</span>
                            </li>
                            <li>
                              <label>Other Billing</label>
                              <span>{val.otherBilling}</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <label>Production Usage Ratio :</label><span>{val.prodBilling}%</span>
                        </div>
                        <div>
                          <CircularProgressbar value={val.productionRatio} text={val.prodBilling + val.otherBilling} />
                          <div><label>Production Billing :</label>${val.prodBilling}<span></span></div>
                          <div> <label>Other Billing :</label><span>${val.otherBilling}</span></div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <DepartmentWiseProduct product={this.state.product} type="department" />
        </div>
      </div>
    );
  }
}
