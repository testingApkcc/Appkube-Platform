import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { images } from '../../img';
import { PLUGIN_BASE_URL } from '../../constants';
import { SelectCloudFilter } from '../../components/SelectCloudFilter';

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
              isOpen: true,
              services: [
                {
                  stage: 'Production',
                  isOpen: true,
                  mainservices: [
                    {
                      title: 'Business Services',
                      isOpen: true,
                      services: [
                        {
                          title: 'admission',
                          isOpen: true,
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: true,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: true,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: true,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Gateway Services',
                      isOpen: false,
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: true,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: true,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  stage: 'Testing',
                  isOpen: false,
                  mainServices: [
                    {
                      title: 'Business Services',
                      services: [
                        {
                          title: 'admission',
                          isOpen: false,
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: true,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          isOpen: false,
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Gateway Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: 'Procurement',
              isOpen: false,
              services: [
                {
                  stage: 'Production',
                  mainservices: [
                    {
                      title: 'Business Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Gateway Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  stage: 'Testing',
                  mainServices: [
                    {
                      title: 'Business Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Gateway Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
          ]
        },
        {
          title: 'IT infra',
          productList: [
            {
              title: 'EMS',
              services: [
                {
                  stage: 'Production',
                  mainservices: [
                    {
                      title: 'Business Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Gateway Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  stage: 'Testing',
                  mainServices: [
                    {
                      title: 'Business Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Gateway Services',
                      servicesType: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: 'Procurement',
              services: [
                {
                  stage: 'Production',
                  mainservices: [
                    {
                      title: 'Business Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Gateway Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  stage: 'Testing',
                  mainServices: [
                    {
                      title: 'Business Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Gateway Services',
                      servicesType: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              isOpen: false,
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
          ]
        }
      ],
      departmentList: [
        {
          name: 'Human Resources',
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275'
        },
        {
          name: 'It Infra',
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275'
        },
        {
          name: 'IT Devlopment',
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275'
        },
        {
          name: 'Finance',
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275'
        },
        {
          name: 'Finance',
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275'
        },
        {
          name: 'It Infra',
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275'
        }
      ]
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

  displayProductServices = () => {
    const { product } = this.state;
    let retData = [];
    if (product && product.length > 0) {
      for (let i = 0; i < product.length; i++) {
        let row = product[i];
        retData.push(
          <div className="inner-table">
            <div className="thead">{row.title}</div>
            {row.productList && row.productList.map((val: any, index: any) => {
              return (
                <div className="tbody">
                  <div className="name"><span>{val.title}</span> <i className='fa fa-chevron-down'></i></div>
                  <div className="app-services">10</div>
                  <div className="data-services">5</div>
                  <div className="ou">Admin, Accounts Adminssion, Transport</div>
                  <div className="edit">
                    <button className="edit-btn">
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                  {val.isOpen == true &&
                    <div className='environments'>
                      <div className='environments-inner'>
                        <div className='heading'>
                          <h3>EMS - Environments</h3>
                          <div className='buttons'>
                            <button className='btn'>
                              <i className='fa fa-plus'></i>
                            </button>
                            <button className='btn'>
                              <i className='fa fa-eye'></i>
                            </button>
                            <button className='btn'>
                              <i className='fa fa-bars'></i>
                            </button>
                          </div>
                        </div>
                        <div className='content'>
                          <div className='tabs-container'>
                            <div className='tabs'>
                              <ul>
                                {val.services && val.services.map((serviceData: any, index: any) => {
                                  return (
                                    <li className={serviceData.isOpen == true ? 'active' : ''}>{serviceData.stage}</li>
                                  )
                                })
                                }
                              </ul>
                            </div>
                            {val.services && val.services.map((serviceres: any, index: any) => {
                              if (serviceres.isOpen == true) {
                                return (
                                  < div className='tabs-content'>
                                    <ul>
                                      {serviceres.mainservices && serviceres.mainservices.map((mainservicedata: any, index: any) => {
                                        return (
                                          <li>
                                            {mainservicedata.isOpen === false && <div className='icon'><img src={images.Icon} alt="" /></div>}
                                            <div className={mainservicedata.isOpen === true ? 'heading full' : 'heading'}>
                                              <span>{mainservicedata.title}</span>
                                              <div className='icon'>
                                                <div className='fa-icon'>
                                                  <i className='fa fa-chevron-down'></i>
                                                </div>
                                                <div className='edit'>
                                                  <div className='bars'>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            {
                                              mainservicedata.isOpen === true &&
                                              <div className='content-table'>
                                                <div className='table'>
                                                  <div className='thead'>
                                                    <div className='th'>Name</div>
                                                  </div>
                                                  {mainservicedata.services && mainservicedata.services.map((service: any, index: any) => {
                                                    return (
                                                      <div className='tbody'>
                                                        <div className='td'>
                                                          <strong>{service.title}<i className='fa fa-chevron-up'></i></strong>
                                                        </div>
                                                        {service.isOpen == true &&
                                                          <div className='table performance-table'>
                                                            {service.subServices && service.subServices.map((subData: any, key: any) => {
                                                              return (
                                                                <>
                                                                  <div className='tbody'>
                                                                    <div className='td'><strong>{subData.title}</strong></div>
                                                                    {key === 0 &&
                                                                      <>
                                                                        <div className='td'>Performance</div>
                                                                        <div className='td'>Availability</div>
                                                                        <div className='td'>Security</div>
                                                                        <div className='td'>Data Protection</div>
                                                                        <div className='td'>User exp</div>
                                                                      </>
                                                                    }
                                                                  </div>
                                                                  {subData.isOpen === true &&
                                                                    <>
                                                                      {subData.list && subData.list.map((name: any, i: any) => {
                                                                        return (
                                                                          <div className='tbody'>
                                                                            <div className='td'><span>{name.title}</span></div>
                                                                            <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                                                            <div className='td'><div className='progress-circle orange'><i className='fa fa-check-circle'></i></div></div>
                                                                            <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                                                            <div className='td'><div className='progress-circle red'><i className='fa fa-check-circle'></i></div></div>
                                                                            <div className='td'><div className='progress-circle yellow'><i className='fa fa-check-circle'></i></div></div>
                                                                          </div>
                                                                        )
                                                                      })
                                                                      }
                                                                    </>
                                                                  }
                                                                </>
                                                              )
                                                            })
                                                            }
                                                          </div>
                                                        }
                                                      </div>
                                                    )
                                                  })
                                                  }
                                                </div>
                                              </div>
                                            }
                                          </li>
                                        );
                                      })
                                      }
                                    </ul>
                                  </div>
                                )
                              }
                              else {
                                return null;
                              }
                            })
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              )
            })
            }
          </div >
        );
      }
    }
    return retData;
  }

  render() {
    const { showRecentFilter, showAddNewFilter, departmentList } = this.state;
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
                  <div className="wise-icon">
                    <Link to={`${PLUGIN_BASE_URL}/department-wise-products`}>
                      <img src={images.Jobs} alt="" />
                    </Link>
                  </div>
                  <Link to={`${PLUGIN_BASE_URL}/environments`} className="asset-white-button min-width-inherit">
                    <i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp; Back
                  </Link>
                </div>
              </div>
            </div>
            <div className="department-wise-boxs">
              <div className='department-wise-inner'>
                {departmentList && departmentList.length > 0 && departmentList.map((val: any, index: any) => {
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
                  )
                })}
              </div>
            </div>
          </div>
          <div className="common-container department-fliters-container">
            <div className="selects-container">
              <SelectCloudFilter />
            </div>
            <div className="fliter-container">
              <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="fliter">
                        <div
                          className="fliter-toggel"
                          onClick={() =>
                            this.setState({
                              showRecentFilter: !showRecentFilter,
                            })
                          }
                        >
                          <i className="fa fa-clock-o"></i>
                          <span>Recent</span>
                        </div>
                        <div className={showRecentFilter === true ? 'fliter-collapse active' : 'fliter-collapse'}>
                          <ul>
                            <li>
                              <a href="#">
                                <span>
                                  <img src={images.awsLogo} alt="" />
                                </span>
                                <p>AWS (657907747545)</p>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>
                                  <img src={images.awsLogo} alt="" />
                                </span>
                                <p>AWS (655668745458)</p>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="fliter">
                        <div
                          className="fliter-toggel"
                          onClick={() =>
                            this.setState({
                              showAddNewFilter: !showAddNewFilter,
                            })
                          }
                        >
                          <i className="fa fa-plus"></i>
                          <span>Add New Environment</span>
                        </div>
                        <div className={showAddNewFilter === true ? 'fliter-collapse active' : 'fliter-collapse'}>
                          <ul>
                            <li>
                              <a
                                style={{
                                  float: 'left',
                                  marginRight: '-54px',
                                  fontSize: '14px',
                                }}
                              >
                                <i>
                                  <Link to={`${PLUGIN_BASE_URL}/account-setup`}>
                                    <span>
                                      <img src={images.awsLogo} alt="" />
                                    </span>{' '}
                                    AWS Environment
                                  </Link>
                                </i>
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  float: 'left',
                                  marginRight: '-54px',
                                  fontSize: '14px',
                                }}
                              >
                                <i>
                                  <span>
                                    <img src={images.microsoftAzureLogo} alt="" />
                                  </span>{' '}
                                  Azure Environment
                                </i>
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  float: 'left',
                                  marginRight: '-54px',
                                  fontSize: '14px',
                                }}
                              >
                                <i>
                                  <span>
                                    <img src={images.gcpLogo} alt="" />
                                  </span>{' '}
                                  GCP Environment
                                </i>
                              </a>
                            </li>
                            <li>
                              <a style={{ float: 'left', fontSize: '14px' }}>
                                <i>
                                  <span>
                                    <img src={images.KubernetesLogo} alt="" />
                                  </span>{' '}
                                  Kubernetes{' '}
                                </i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="fliter">
                        <div className="fliter-toggel">
                          <i className="fa fa-sign-out"></i>
                          <span>Export</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="form-group search-control">
                    <button className="btn btn-search">
                      <i className="fa fa-search"></i>
                    </button>
                    <input type="text" className="input-group-text" placeholder="Search" />
                  </div>
                </div>
              </div>
            </div>
            <div className="data-table">
              <div className="thead">
                <div className="name">Name</div>
                <div className="app-services">App Services</div>
                <div className="data-services">Data Services</div>
                <div className="ou">OU</div>
                <div className="edit">
                  <button className="edit-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
              <div className="tbody">
                {this.displayProductServices()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
