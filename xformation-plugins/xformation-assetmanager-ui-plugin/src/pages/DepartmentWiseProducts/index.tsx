import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { images } from '../../img';
import { PLUGIN_BASE_URL } from '../../constants';
// import { SelectCloudFilter } from '../../components/SelectCloudFilter';
import { DepartmentWiseProduct } from './../../components/DepartmentWiseProduct';

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
                  stage: 'Testing',
                  isOpen: false,
                  mainservices: [
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
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275',
        },
        {
          name: 'It Infra',
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275',
        },
        {
          name: 'IT Devlopment',
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275',
        },
        {
          name: 'Finance',
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275',
        },
        {
          name: 'Finance',
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275',
        },
        {
          name: 'It Infra',
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275',
        },
      ],
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
    const { departmentList } = this.state;
    return (
      <div className="asset-container">
        <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ASSET MANAGEMENT" />
        <div className="department-wise-container">
          <div className="common-container">
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
                        <div className="heading">{val.name}</div>
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
